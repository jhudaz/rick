import React, { Component } from 'react';

//containers
import Header from './header';
import Select from './select';
import Search from './search';
import Menu from './menu';
import Courses from './courses';
import Aside from './aside';

//sassn styles
import '../App.scss';


class App extends Component {

  render() {
    return (
      <div>
        <div className="navbar">
          <div className="header"><Header /></div>
          <div className="select"><Select /></div>
          <div className="search"><Search /></div>
          <div className="search"><Menu /></div>
          <div className="menu"></div>
        </div>
        <div className="body">
          <div className="aside">
            <Aside />
          </div>
          <div className="content">
            <Courses />
          </div>
          <div className="aside"></div>
        </div>
      </div>
    );
  }
}

export default App;
