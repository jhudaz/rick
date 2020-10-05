import React, { Component } from 'react';

import '../App.scss';

class MenuComp extends Component {
  
  render() {
    return (
      <div className="menu">
        <div className="items">
          Courses
        </div>
        <div className="items">
          Providers
        </div>
      </div>
    )
  }
}

export default MenuComp;