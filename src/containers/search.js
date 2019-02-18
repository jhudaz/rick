import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Input } from 'antd';
import { getCourses } from '../actions';

import '../App.scss';

const Search = Input.Search;

class SearchComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      size: 'large'
    }
    this.searchCourses = this.searchCourses.bind(this);
  }
  searchCourses(str) {
    this.props.getCourses(1, str);
  }
  render() {
    return (
      <div className="search">
        <Search
          className="inputSearch"
          placeholder="input search text"
          size={this.state.size}
          onSearch={this.searchCourses}
          style={{ width: 700 }}
        />
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
    getCourses
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchComp);