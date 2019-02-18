import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, Pagination, Button, Icon } from 'antd';

import { getTopCourses, getCourses } from '../actions';

import '../App.scss';

class Courses extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1
    }
    this.createCourses = this.createCourses.bind(this);
    this.pagination = this.pagination.bind(this);
    this.createTopCourses = this.createTopCourses.bind(this);
  }
  //to call the api's to bring the courses data
  componentDidMount() {
    this.props.getTopCourses();
    this.props.getCourses(this.state.page);
  }
  pagination(int) {
    this.props.getCourses(int);
  }
  //to create the list of normal courses 
  createCourses(e, i) {
    return (
      <li key={i}>
        <Card
          className="card"
          style={{ width: 500 }}
        >
          <h3>{e.course.name.toUpperCase()}</h3>
          <h4>price: ${e.price}</h4>
        </Card>
      </li>
    )
  }
  //to create the top courses
  createTopCourses(e, i) {
    return (
      <li key={i}>
        <Card
          className="card"
          style={{ width: 500 }}
        >
          <img
            className="img"
            src={`https://storage.cebroker.com/CEBroker/${e.coursePublication.course.featuredBanner}`} 
            alt="Banner"
          />
          <label className="featured">FEATURED</label>
          <h2>{e.coursePublication.course.name}</h2>
          <h3>{e.coursePublication.course.provider.name}</h3>
          <Button><Icon type="caret-right" /></Button>
        </Card>
      </li>
    )
  }
  render() {
    return (
      <div className="courses">
        <Card
          className="card"
          style={{ width: 500 }}
        >
          <Pagination
            defaultCurrent={1}
            currrent={this.state.page}
            pageSize={18}
            onChange={this.pagination}
            total={this.props.reducerApp.courses.totalItems} />
          <ul>
            {this.props.reducerApp.top.map((e, i) => this.createTopCourses(e, i))}
          </ul>
          <br />
          <ul>
            {this.props.reducerApp.courses.items.map((e, i) => this.createCourses(e, i))}
          </ul>
        </Card>
      </div >
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