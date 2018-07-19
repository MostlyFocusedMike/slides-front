import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {loadVideo, loadUser} from './store'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
       <button onClick={() => this.props.loadVideo(12)}>load video</button>
       <br />
       <br />
       <button onClick={() => this.props.loadUser(18)}>load user</button>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  video: state.video,
  user: state.user
})


export default connect(mapStateToProps, {loadVideo,loadUser})(App);
