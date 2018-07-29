import React from 'react'
import {connect} from 'react-redux'
import NewVideoForm from '../components/newVideoFormComponents/NewVideoForm'

const NewVideoPage = (props) => {
  return (
    <div>
      <h1>New Video Page</h1>
      <NewVideoForm />
    </div>
  )
}

export default NewVideoPage
