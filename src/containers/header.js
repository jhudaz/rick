import React, { Component } from 'react';

import '../App.scss';

class Header extends Component {
  render() {
    return (
      <div className="header">

        <ul className="menuHeader">
          <li>Features</li>
          <li>Plans</li>
          <li>Organizations</li>
          <li>Brouse Courses</li>
          <li>Support</li>
        </ul>
        <div className="buttons">
          <button>Sign in</button>
          <button>7 day trial</button>
        </div>

      </div>

    )
  }
}

export default Header;