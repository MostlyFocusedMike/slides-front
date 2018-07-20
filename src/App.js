import React from 'react';
import './App.css';
import Routes from './routes'

class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}
export default App
