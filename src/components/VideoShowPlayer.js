import React from 'react';
import YouTube from 'react-youtube';
 
class Player extends React.Component {
  test() {
  console.log("hey");
  }
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
 
    return (
      <div>
      <YouTube
        videoId="2g811Eo7K8U"
        opts={opts}
      />
        </div>
      
    );
  }
 
}

export default Player 
      // <img src={`http://img.youtube.com/vi/2g811Eo7K8U/mqdefault.jpg`} />}

        // onReady={this.props.setVideo}
        // onStateChange={this.props.handlePlayState}
