import React, { Component } from 'react';
import './App.css';
import InputFullSalary from './Components/InputFullSalary';
import InputReadOnly from './Components/InputReadOnly';
import { calculateSalaryFrom } from './Helpers/salary';
import Bar from './Components/Bar';
import PieChart from './Components/PieChart';

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            fullSalary: 1000,
        };
    }

    handleChangeSalary = (newSalary) => {
        if (newSalary === '') newSalary = 0;
        this.setState({
            fullSalary: parseInt(newSalary),
        });
    };

    render() {
        const { fullSalary } = this.state;
        const { baseINSS, discountINSS, baseIRPF, discountIRPF, netSalary } = calculateSalaryFrom(fullSalary);

        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <h1 className="center-align teal-text text-darken-2">React Salário</h1>
                    </div>
                    <form className="col s12 m6 l12">
                        <div className="input-field col s12 m12 l9">
                            <i className="material-icons prefix">attach_money</i>
                            <label htmlFor="fullSalary">Salário Bruto:</label>
                            <InputFullSalary fullSalary={fullSalary} onChangeSalary={this.handleChangeSalary} />
                        </div>
                        <div className="input-field col s12 m6 l3">
                            <label>Base INSS:</label>
                            <InputReadOnly id="baseINSS" value={baseINSS} />
                        </div>
                        <div className="input-field col s12 m6 l3">
                            <label>Desconto INSS:</label>
                            <InputReadOnly id="discountINSS" value={discountINSS} fullSalary={fullSalary} color={'#e67e22'} />
                        </div>
                        <div className="input-field col s12 m6 l3">
                            <label>Base IRPF:</label>
                            <InputReadOnly id="baseIRPF" value={baseIRPF} />
                        </div>
                        <div className="input-field col s12 m6 l3">
                            <label>Desconto IRPF:</label>
                            <InputReadOnly id="discountIRPF" value={discountIRPF} fullSalary={fullSalary} color={'#c0392b'} />
                        </div>
                        <div className="input-field col s12 m12 l3">
                            <label>Salário Líquido:</label>
                            <InputReadOnly id="netSalary" value={netSalary} fullSalary={fullSalary} color={'#16a085'} />
                        </div>
                    </form>
                    <div className="pie col s12 m6 l12 valign-wrapper">
                        <PieChart info={{ fullSalary, discountINSS, discountIRPF, netSalary }} />
                    </div>
                </div>
            </div>
        );
    }
}
