import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {loadVideo, loadUser} from './store'

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
       <button onClick={() => this.props.loadVideo(11)}>load video</button>
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
