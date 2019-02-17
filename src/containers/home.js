import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//containers
import Header from './header';
import Select from './select';
import Search from './search';
import Menu from './menu';
//actions
import { getTopCourses, getCourses } from '../actions';
//sassn styles
import '../App.scss';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }
  componentDidMount() {
    this.props.getTopCourses();
    this.props.getCourses();
  }
  render() {
    return (
      <div>

        <div className="navbar">
          <div className="aside"></div>
          <div className="content">
            <div className="header"><Header /></div>
            <div className="select"><Select /></div>
            <div className="search"><Search /></div>
            <div className="search"><Menu /></div>
            <div className="menu"></div>
          </div>
          <div className="aside"></div>
        </div>
      </div>
    );
  }
}
//reducers
function mapStateToProps({ reducerApp }) {
  return {
    reducerApp
  }
}
//actions
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getTopCourses,
    getCourses
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
