import React, { Component } from 'react';
import { Input } from 'antd';

import '../styles/search.scss';

const Search = Input.Search;

class SearchComp extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="search">
        <Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
          style={{ width: 700 }}
        />
      </div>
    )
  }
}

export default SearchComp;