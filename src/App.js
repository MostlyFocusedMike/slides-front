import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {loadVideo, loadUser} from './store'

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
       {this.props.video.youtubeVid}
       <button onClick={() => this.props.loadVideo(11)}>click</button>
       <br />
       <br />
       {this.props.user.username}
       <button onClick={() => this.props.loadUser(18)}>click</button>
      {this.props.user.videos ? (
        this.props.user.videos.map(video => {
          return <h1>{video.youtubeVid}</h1>
        })
      ):null}

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  video: state.video,
  user: state.user
})


export default connect(mapStateToProps, {loadVideo,loadUser})(App);
