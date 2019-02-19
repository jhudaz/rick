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
  //to call the api evry time that the user use the pagination
  pagination(int) {
    this.props.getCourses(int);
  }
  //to create the list of normal courses 
  createCourses(e, i) {
    return (
      <Card
        key={i}
        className="card"
      >
        <div>
          <h3 className="name">{e.course.name}</h3>
          <h3 className="provider">{e.course.provider.name}</h3>
        </div>

        <div className="buttons">
          <h4>$ {e.price}</h4>
          <Button><Icon type="caret-right" /></Button>
        </div>

      </Card>
    )
  }
  //to create the top courses
  createTopCourses(e, i) {
    return (
      <Card
        key={i}
        className="card"
      >
        <div>
          <img
            className="img"
            src={`https://storage.cebroker.com/CEBroker/${e.coursePublication.course.featuredBanner}`}
            alt="Banner"
          />
        </div>
        <div className="top">
          <h2 className="name">{e.coursePublication.course.name}</h2>
          <label className="featured">FEATURED</label>
          <h3 className="provider">{e.coursePublication.course.provider.name}</h3>
        </div>
        <div className="top2">
          <h3>$ {e.coursePublication.price === null ? '0' : e.coursePublication.price}</h3>
          <Button><Icon type="caret-right" /></Button>
        </div>
      </Card>
    )
  }
  render() {
    return (
      <div className="courses">
        <Card
          className="card"
        >
          <Pagination
            defaultCurrent={1}
            currrent={this.state.page}
            pageSize={18}
            onChange={this.pagination}
            total={this.props.reducerApp.courses.totalItems} />
          <div className="list">
            {this.props.reducerApp.top.map((e, i) => this.createTopCourses(e, i))}
            <br />
            {this.props.reducerApp.courses.items.map((e, i) => this.createCourses(e, i))}
          </div>
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