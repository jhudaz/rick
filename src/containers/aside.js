import React, { Component } from 'react';
import { Card, Collapse, Radio, Icon } from 'antd';

import '../App.scss';

const Panel = Collapse.Panel;
const RadioGroup = Radio.Group;

class Courses extends Component {

  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    return (
      <div className="aside">
        <Card
          style={{ width: 300 }}
        >
          <h2>Filter Courses<Icon type="down" /></h2>
        </Card>
        <Collapse defaultActiveKey={['1', '2', '3']} >
          <Panel header="Course type" key="1">
            <RadioGroup>
              <Radio style={radioStyle} >Self paced</Radio>
              <Radio style={radioStyle} >Live</Radio>
            </RadioGroup>
          </Panel>
          <Panel header="Delivery type" key="2">
            <RadioGroup>
              <Radio style={radioStyle} >Any delivery type</Radio>
              <Radio style={radioStyle} >Computer-Based Training</Radio>
              <Radio style={radioStyle} >Correspondence</Radio>
              <Radio style={radioStyle} >Mailed Material</Radio>
            </RadioGroup>
          </Panel>
          <Panel header="Subject area" key="3">
            <RadioGroup>
              <Radio style={radioStyle} >Any subject area</Radio>
              <Radio style={radioStyle} >HIV/AIDS</Radio>
              <Radio style={radioStyle} >End-of-life care and<br />Palliative Health Care</Radio>
            </RadioGroup>
          </Panel>
        </Collapse>,

      </div>
    )
  }
}

export default Courses;