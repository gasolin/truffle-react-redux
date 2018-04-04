import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import {Header} from './components/Header'
import {Content} from './components/Content'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header {...this.props} />
        <Content {...this.props} />
      </div>
    );
  }
}

function mapState (state) {
  return {
    noConnection: state.noConnection,
  }
}

function mapDispatch (dispatch) {
  return {}
}

export default connect(mapState, mapDispatch)(App)
