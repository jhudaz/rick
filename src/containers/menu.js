import React, { Component } from 'react';
import { Menu } from 'antd';

import '../App.scss';

class MenuComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 'COURSES'
    }
    this.handleClick = this.handleClick.bind(this);
  }
  //to handle the menu item selected
  handleClick(e) {
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <div className="menu">
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="COURSES" className="items">
            COURSES
          </Menu.Item>
          <Menu.Item key="PROVIDERS" className="items">
            PROVIDERS
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default MenuComp;