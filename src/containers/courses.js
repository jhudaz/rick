import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//actions
import { getTopCourses, getCourses } from '../actions';

import '../App.scss';

class Courses extends Component {
  constructor(props){
    super(props)
    this.createCourses = this.createCourses.bind(this);
  }
  componentDidMount() {
    this.props.getTopCourses();
    this.props.getCourses();
  }
  createCourses(e,i){

  }
  render() {
    return (
      <div className="courses">
        <ul>

        </ul>
      </div>
    )
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
export default connect(mapStateToProps, mapDispatchToProps)(Courses);