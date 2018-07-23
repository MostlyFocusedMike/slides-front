import React from 'react'

const ProfileInfoCard = (props) => {
  const {username, bio, "pic_link": picLink} = props.user
  return (
    <div className="profile-info">
      <img src={picLink} alt={username} />
      <h1>{username}</h1>
      <h2>{bio}</h2>
    </div>
  )
}

export default ProfileInfoCard
