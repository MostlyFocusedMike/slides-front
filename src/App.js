import React from 'react';
import './App.css';
import Routes from './routes'
import Nav from './components/Nav'

class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <Nav />
        <Routes />
      </div>
    );
  }
}
export default App
