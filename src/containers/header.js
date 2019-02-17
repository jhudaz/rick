import React, { Component } from 'react';

import '../styles/header.scss';

class Header extends Component {
  render() {
    return (
      <div className="header">

        <ul>
          <li><brand>ce broker</brand></li>
          <li>Features</li>
          <li>Plans</li>
          <li>Organizations</li>
          <li>Brouse Courses</li>
          <li>Support</li>
          <li>
            <div className="buttons">
              <button>Sign in</button>
              <button>7 day trial</button>
            </div>
          </li>
        </ul>

      </div>

    )
  }
}

export default Header;