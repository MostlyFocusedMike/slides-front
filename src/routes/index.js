import React from "react"
import {Switch, Route} from "react-router-dom"
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import SignUpPage from '../pages/SignUpPage'
import VideosPage from '../pages/VideosPage'
import VideoPage from '../pages/VideoPage'
import UsersPage from '../pages/UsersPage'
import UserPage from '../pages/UserPage'
import NoMatch from '../pages/NoMatch'

const routes = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/videos" component={VideosPage} />
      <Route exact path="/videos/:id" component={VideoPage} />
      <Route exact path="/users" component={UsersPage} />
      <Route exact path="/users/:id" component={UserPage} />
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route path="*" component={NoMatch} />
    </Switch>
  )
}

export default routes

