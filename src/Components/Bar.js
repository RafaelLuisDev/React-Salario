import React, { Component } from 'react';
import M from 'materialize-css';
import { formatNumber } from '../Helpers/formatHelpers';
import './Bar.css';

export default class Bar extends Component {
    componentDidMount() {
        M.Tooltip.init(document.querySelectorAll('.tooltipped'));
    }

    componentDidUpdate() {
        const barParts = document.querySelectorAll('.barPart');
        barParts.forEach((barPart) => { 
            if (parseInt(this.props.info.fullSalary) === 0) {
                barPart.classList.remove('scale-in');
                barPart.classList.add('scale-out');
            } else {
                barPart.classList.remove('scale-out');
                barPart.classList.add('scale-in');
            }
        });
    }

    render() {
        const { info } = this.props;
        const { fullSalary, discountINSS, discountIRPF, netSalary } = info;
        const percentINSS = discountINSS / fullSalary;
        const percentIRPF = discountIRPF / fullSalary;
        const percentNetSalary = netSalary / fullSalary;

        const styling = (color, percent) => {
            return { backgroundColor: color, width: `${percent * 100}%` };
        };

        return (
            <div>
                <div className="barPart z-depth-4 tooltipped scale-transition" data-position="bottom" data-tooltip={formatNumber(percentIRPF)} style={styling('#c0392b', percentIRPF)}></div>
                <div className="barPart z-depth-4 tooltipped scale-transition" data-position="bottom" data-tooltip={formatNumber(percentINSS)} style={styling('#e67e22', percentINSS)}></div>
                <div className="barPart z-depth-4 tooltipped scale-transition" data-position="bottom" data-tooltip={formatNumber(percentNetSalary)} style={styling('#16a085', percentNetSalary)}></div>
            </div>
        );
    }
}
