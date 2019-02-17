import React, { Component } from 'react';
import { Select } from 'antd';

import '../App.scss';

const Option = Select.Option;

class Selects extends Component {
  constructor(props) {
    super(props)
    this.state ={
      size: 'large'
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value) {
    console.log(`selected ${value}`);
  }

  render() {
    return (
      <div className="selects">
        <ul>
          <li>
            <h3>Find CE for a </h3>
          </li>
          <li>
            <Select
              className="items"
              size = {this.state.size}
              defaultValue="Florida"
              style={{ width: 120 }}
              onChange={this.handleChange()}
            >
              <Option value="Florida">Florida</Option>
              <Option value="Washington">Masachusets</Option>
              <Option value="New York">New York</Option>
            </Select>
          </li>
          <li>
            <Select
              className="items"
              size = {this.state.size}
              defaultValue="Doctor"
              style={{ width: 200 }}
              onChange={this.handleChange()}
            >
              <Option value="Doctor">Doctor</Option>
              <Option value="Developer">Developer</Option>
              <Option value="Lawyer">New Lawyer</Option>
            </Select>
          </li>
        </ul>
      </div>
    )
  }
}

export default Selects;