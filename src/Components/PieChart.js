import React, { Component } from 'react';
import Chart from 'chart.js';
import { formatNumber } from '../Helpers/formatHelpers';

let myChart;

export default class PieChart extends Component {
    componentDidMount() {
        const { fullSalary, discountINSS, discountIRPF, netSalary } = this.props.info;
        const percentINSS = discountINSS / fullSalary;
        const percentIRPF = discountIRPF / fullSalary;
        const percentNetSalary = netSalary / fullSalary;

        let ctx = document.getElementById('myChart');
        myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Desconto INSS', 'Desconto IRPF', 'Salário Líquido'],
                datasets: [
                    {
                        data: [percentINSS, percentIRPF, percentNetSalary],
                        backgroundColor: ['#e67e22', '#c0392b', '#16a085'],
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    position: 'right',
                    labels: {
                        boxWidth: 40,
                    },
                },
                tooltips: {
                    bodyFontSize: 14,
                    bodyFontColor: 'white',
                    bodyFontStyle: 'bold',
                    backgroundColor: '#000000aa',
                    caretSize: 0,
                    displayColors: false,
                    xPadding: 10,
                    yPadding: 10,
                    callbacks: {
                        label: function (tooltipItem, data) {
                            var label = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];

                            return formatNumber(label);
                        },
                    },
                },
            },
        });
    }

    componentDidUpdate() {
        const { fullSalary, discountINSS, discountIRPF, netSalary } = this.props.info;
        const percentINSS = discountINSS / fullSalary;
        const percentIRPF = discountIRPF / fullSalary;
        const percentNetSalary = netSalary / fullSalary;

        myChart.data.datasets[0].data = [percentINSS, percentIRPF, percentNetSalary];
        if (fullSalary === 0) myChart.data.datasets[0]._meta[0].controller.chart.legend.options.display = false;
        else myChart.data.datasets[0]._meta[0].controller.chart.legend.options.display = true;
        myChart.update();
    }

    render() {
        return (
            <div className="chart-container col s12 m6 l6 offset-l3 valign-wrapper">
                <canvas id="myChart"></canvas>
            </div>
        );
    }
}
