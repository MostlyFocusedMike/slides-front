import React from 'react'
import YouTube from 'react-youtube';

class VideoPreviewFieldset extends React.Component {
  render() {
    const opts = {
      // height: '480',
      // width: '640',
      playerVars: {
        autoplay: 0
      }
    }
    return (
      <fieldset 
        onSubmit={this.props.handleFieldSubmit}
        onChange={this.props.handleVideoChange}
      >
        <h2>Select your video</h2>
        <div>
          <label htmlFor="youtube_vid">YouTube ID:</label>
          <input type="text" 
            name="youtube_vid"
            id="youtube_vid"
            value={this.props.youtube_vid}
          />
        </div>

        <div>
          <label htmlFor="desc">Video Description</label>
          <input type="text"
            name="desc"
            id="desc"
            value={this.props.desc}
          />
        </div> 
        <div>
        {this.props.loadPreview ? 
          ( <YouTube
              videoId={this.props.youtube_vid}
              opts={opts}
            />
          ) : (<p>Load a valid YouTube Video to see a preview</p>)
        }
        </div>
      </fieldset>
    )
  }
}

export default VideoPreviewFieldset
