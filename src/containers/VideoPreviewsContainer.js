import React from 'react'
import VideoThumbnailCard from '../components/VideoThumbnailCard'     

const VideoPreviewsContainer = (props) => {
  const {username, videos} = props.user
  return (
    <div className="video-previews-container">
      <h2>Here are all of {username}'s projects</h2>
      {videos.map(video => <VideoThumbnailCard video={video} key={video.id}/>)}
    </div>
  )
}

export default VideoPreviewsContainer
