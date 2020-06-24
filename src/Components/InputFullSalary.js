import React, { Component } from 'react';

export default class InputFullSalary extends Component {
    handleChangeSalary = (event) => {
        this.props.onChangeSalary(event.target.value);
    };

    render() {
        const { fullSalary } = this.props;

        return <input type="number" name="fullSalary" id="fullSalary" value={fullSalary} onChange={this.handleChangeSalary} step="100" min="0" />;
    }
}
