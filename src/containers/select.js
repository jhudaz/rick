import React, { Component } from 'react';
import { Select } from 'antd';
import '../styles/select.scss';

const Option = Select.Option;

class Selects extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value) {
    console.log(`selected ${value}`);
  }

  render() {
    return (
      <div className="selects">
        <h3>Find CE for a</h3>
        <Select defaultValue="Florida" style={{ width: 120 }} onChange={this.handleChange()}>
          <Option value="Florida">Florida</Option>
          <Option value="Washington">Masachusets</Option>
          <Option value="New York">New York</Option>
        </Select>
        <Select defaultValue="Doctor" style={{ width: 120 }} onChange={this.handleChange()}>
          <Option value="Doctor">Doctor</Option>
          <Option value="Masachusets">Masachusets</Option>
          <Option value="New York">New York</Option>
        </Select>
      </div>
    )
  }
}

export default Selects;