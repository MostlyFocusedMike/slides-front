import React from "react" 
import { connect } from 'react-redux';

import {loadVideo, loadUser} from '../store'

class Home extends React.Component {
  render() {
    return (
      <div>
       <h1> HOME PAGE </h1>
       <button onClick={() => this.props.loadVideo(12)}>load video</button>
       <br />
       <br />
       <button onClick={() => this.props.loadUser(18)}>load user</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  video: state.video,
  user: state.user
})


export default connect(mapStateToProps, {loadVideo,loadUser})(Home);
