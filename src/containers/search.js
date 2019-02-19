import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Input, Icon} from 'antd';
import { getCourses } from '../actions';

import '../App.scss';

const Search = Input.Search;

class SearchComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      size: 'large',
      loading: false
    }
    this.searchCourses = this.searchCourses.bind(this);
  }
  //to call the api to bring courses when the user types something in the input and display a loader
  searchCourses(str) {
    this.setState({ loading: true })
    this.props.getCourses(1, str).then(() => {
      this.setState({ loading: false });
    }).catch(() => {
      this.setState({ loading: false });
    })

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
        {this.state.loading && <Icon type="loading" className="loader" />}
      </div>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCourses
  }, dispatch)
}
export default connect(null, mapDispatchToProps)(SearchComp);