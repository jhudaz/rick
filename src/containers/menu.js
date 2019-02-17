import React, { Component } from 'react';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

class Menu extends Component {
  constructor(props){
    super(props)
    this.callback = this.callback.bind(this)
  }
  
  callback(key) {
    console.log(key);
  }
  
  render() {
    return (
      <div className="menu">
        <Tabs defaultActiveKey="1" onChange={this.callback()}>
          <TabPane tab="Tab 1" key="1"></TabPane>
          <TabPane tab="Tab 2" key="2"></TabPane>
        </Tabs>,
      </div>
    )
  }
}

export default Menu;