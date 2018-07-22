import React from 'react';
import {Redirect} from 'react-router'
import { connect } from 'react-redux';
import './App.css';
import Routes from './routes'
import Nav from './components/Nav'

class App extends React.Component {
  getCurrentUser = () => {
    const token = localStorage.getItem('token')
    if (token) {
      const options =   {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': token
        }
      }
      fetch('http://localhost:3000/api/v1/current_user', options)
        .then(resp => resp.json())
        .then(user => {
        })
    }
  }
  render() {
    console.log(this.props);
    // this.getCurrentUser()
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

export default connect(mapState)(App)
