import React, { Component } from 'react';
import { Button } from 'antd';
import '../App.scss';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <img 
            src="https://www.amarelocriativo.com.br/wp-content/uploads/2018/01/rick-morty-9.jpg" 
            alt="logo" 
          />
          <label>RICK</label>
        </div>
        <div className="menuHeader">
          <ul>
            <li>Features</li>
            <li>Plans</li>
            <li>Organizations</li>
            <li>Brouse Courses</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="buttons">
          <Button>Sign in</Button>
          <Button className="trial">7 day trial</Button>
        </div>

      </div>

    )
  }
}

export default Header;