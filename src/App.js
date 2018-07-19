import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home'

class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}
export default App
