import React from 'react' 
import {connect} from 'react-redux'
import {newSlide} from '../../store';


class SlideMakerInputs extends React.Component {
  state = {
    slideStart: "",
    timecode: ""
  }

  hmsToSeconds(input) {
    let parts = input.split(':'),
      seconds = parseInt(parts[parts.length - 1]),
      minutes = parseInt(parts[parts.length - 2]) || 0,
      hours = parseInt(parts[parts.length - 3]) || 0;
    return (hours * 3600 + minutes * 60 + seconds)
  }

  secondsToHms(d) {
    d = parseInt(d);

    let h = Math.floor(d / 3600);
    let m = Math.floor(d % 3600 / 60);
    let s = Math.floor(d % 3600 % 60);
    if (h) {
      return (h) + ":" + ('0' + m).slice(-2) + ":" + ('0' + s).slice(-2);
    } else {
      return  m + ":" + ('0' + s).slice(-2);
    }
  }

  handleTimeCodeChange = (e) => {
    const re = /^[\d:\b]+$/;
    // if value is not blank, then test the regex
    let val = e.target.value
    // val = val.replace(/:/g, "").replace(/(..?)/g, ':$1').slice(0)
    // .replace(/(..?)/g, ':$1').slice(0,-1)
    if ((val === '' || re.test(val)) && val.length < 9) {
      if (val.match(":")) {
        this.setState({timecode: val, slideStart: this.hmsToSeconds(val)})
      } else {
        this.setState({timecode: this.secondsToHms(val), slideStart: this.hmsToSeconds(val)})
      }
    }
  }

  handleNewSlide = (e) => {
    e.preventDefault()
    this.props.newSlide(this.state.slideStart, this.state.timecode)
  }





  render() {
    return (
      <div> 
        <label> Make a new slide at </label>
        <input 
          value={this.state.timeCode} 
          onChange={this.handleTimeCodeChange}
        /> 
        <button value="nothing" onClick={this.handleNewSlide}>Make new slide</button>
      </div>
    )

  }
}

const mapState = (state) => ({
  currentUser: state.currentUser,
  newVideo: state.newVideo
})

export default connect(mapState, {newSlide})(SlideMakerInputs)
