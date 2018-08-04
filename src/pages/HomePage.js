import React from "react" 
import { connect } from 'react-redux';

import {loadVideo} from '../store'

class Home extends React.Component {
  render() {
    return (
      <div>
       <h1> HOME PAGE </h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  video: state.video,
  user: state.user
})


export default connect(mapStateToProps, {loadVideo})(Home);
