import React from 'react';
import {withRouter} from 'react-router'
import { connect } from 'react-redux';
import './App.css';
import Routes from './routes'
import Nav from './components/Nav'
import {reauthUser} from './store'

class App extends React.Component {
  getCurrentUser = () => {
    const token = localStorage.getItem('token')
    if (token) {
      this.props.reauthUser(token)
    }
  }

  componentDidMount() {
    this.getCurrentUser()
  }


  render() {
    return (
      <div className="App">
        <Nav />
        <Routes /> 
      </div>
    );
  }
}

const mapState = (state) => ({
  currentUser: state.currentUser
})

const mapDispatch = (dispatch) => ({ // the () give us implicit return
  // addTest: function(num) {
  reauthUser(user) {
    dispatch(reauthUser(user))
  }
})

export default withRouter(connect(null, mapDispatch)(App))
