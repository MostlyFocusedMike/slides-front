import React from 'react'
import {Link} from 'react-router-dom'

const VideoPreviewCard = (props) => {
  const {id, "youtube_vid": youtubeVid, desc} = props.video
  return (
    <div className="video-preview">
      <img 
        src={`http://img.youtube.com/vi/${youtubeVid}/mqdefault.jpg`} 
        alt="thumbnail for a video project"
      />
      <h3>{desc}</h3>
      <Link to={`/videos/${id}`}>Watch this video</Link>
    </div>
  )
}

export default VideoPreviewCard
