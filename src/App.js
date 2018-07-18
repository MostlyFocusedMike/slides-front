import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {addTest} from './store'

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
       {this.props.test}
       <button onClick={() => this.props.addTest(4)}>click</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

// mapDispatchToProps returns an object, and each key points to an action creator,
// which is then dispatched to our reducer, and we have access to dispatch, since 
// that is what connect passes through to the second argument of it's first function
//
// below are two ways to do it, one of which uses an extra bindActionCreators method
// but the way we are using is ultra shorthande, which assumes the name if the key given
// and the action creators needed are the same. It will then expand out to the method 
// right below. It also automatically passes in any arguments when they are called from
// the event that fires them
//
// const mapDispatchToProps = (dispatch) => ({ // the () give us implicit return
//   // addTest: function(num) {
//   addTest(num) {
//     dispatch(addTest(num))
//   }
// })

// this is another way to do it that requires the bind action creators 
// import { bindActionCreators } from 'redux';
// ...
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     addTest: addTest
//   }, dispatch);
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default connect(mapStateToProps, {addTest})(App);
