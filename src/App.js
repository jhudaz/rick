import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
//containers
import Home from './containers/home';
//styles
import './App.scss';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <Route exact path="/" component={Home} /> 
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
