import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionsCreators } from 'redux';
//actions
//import { } from '../actions';
//sassn styles
import './App.scss';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }
  render() {
    return (
      <div>

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
  return bindActionsCreators({

  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
