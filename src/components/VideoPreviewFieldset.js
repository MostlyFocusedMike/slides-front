import React from 'react'
import YouTube from 'react-youtube';

class VideoPreviewFieldset extends React.Component {
  render() {
    const opts = {
      height: '240',
      width: '426',
      playerVars: {
        autoplay: 0
      }
    }
    return (
      <fieldset 
        onSubmit={this.props.handleFieldSubmit}
        onChange={this.props.handleVideoChange}
      >
        <legend>Select the video</legend>
        <label htmlFor="youtube_vid">youtube id (MVP ONLY)</label>
        <input type="text" 
          name="youtube_vid"
          id="youtube_vid"
          value={this.props.youtube_vid}
        />
        <label htmlFor="desc">Video Description</label>
        <input type="text"
          name="desc"
          id="desc"
          value={this.props.desc}
        />
        
        <div>
        {this.props.loadPreview ? 
          ( <YouTube
              videoId={this.props.youtube_vid}
              opts={opts}
            /> 
          ) : (
            <button onClick={this.props.handleLoadPreview}>Load Preview</button> 
          )
        }
        </div>
      </fieldset>
    )
  }
}

export default VideoPreviewFieldset
