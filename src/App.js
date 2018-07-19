import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {loadVideo} from './store'

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
       {this.props.video.youtubeVid}
       <button onClick={() => this.props.loadVideo(11)}>click</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({video: state.video})


export default connect(mapStateToProps, {loadVideo})(App);
