import React, { Component } from 'react';
import { Input } from 'antd';

import '../App.scss';

const Search = Input.Search;

class SearchComp extends Component {
  constructor(props) {
    super(props)
    this.state ={
      size: 'large'
    }
  }
  render() {
    return (
      <div className="search">
        <Search
          placeholder="input search text"
          size={this.state.size}
          onSearch={value => console.log(value)}
          style={{ width: 700 }}
        />
      </div>
    )
  }
}

export default SearchComp;