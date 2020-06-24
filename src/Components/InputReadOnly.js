import React, { Component } from 'react';
import { formatNumber, formatValue } from '../Helpers/formatHelpers';

export default class InputReadOnly extends Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        const { id, value, fullSalary, color } = this.props;
        const percent = value / fullSalary;

        const textPercent = value === 0 || fullSalary === undefined ? '' : `(${formatNumber(percent)})`;

        return <input type="text" name={id} id={id} value={`${formatValue(value)} ${textPercent}`} style={{ color: color, fontWeight: 'bold' }} readOnly />;
    }
}
