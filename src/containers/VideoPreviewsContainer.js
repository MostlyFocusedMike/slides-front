import React from 'react'
import VideoPreviewCard from '../components/VideoPreviewCard'     

const VideoPreviewsContainer = (props) => {
  const {username, videos} = props.user
  return (
    <div className="video-previews-container">
      <h2>Here are all of {username}'s projects</h2>
      {videos.map(video => <VideoPreviewCard video={video} key={video.id}/>)}
    </div>
  )
}

export default VideoPreviewsContainer
