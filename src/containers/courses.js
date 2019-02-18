import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card } from 'antd';

import { getTopCourses, getCourses } from '../actions';

import '../App.scss';

class Courses extends Component {
  constructor(props){
    super(props)
    this.state={
      page: 1
    }
    this.createCourses = this.createCourses.bind(this);
  }
  //to call the api's to bring the courses data
  componentDidMount() {
    this.props.getTopCourses();
    this.props.getCourses(this.state.page);
  }
  //to create the list of normal courses 
  createCourses(e,i){
    return(
      <li key={i}>
        <Card 
          className="card"
          style={{ width: 600 }}
        >
       <h3>{e.course.name.toUpperCase()}</h3>
       <h4>price: ${e.price}</h4> 
        </Card>
      </li>
    )
  }
  render() {
    return (
      <div className="courses">
        <ul>
          {this.props.reducerApp.courses.map((e,i) => this.createCourses(e,i))}
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