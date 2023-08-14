import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {
    number: 0,
  }

  onAccelerate = () => {
    const {number} = this.state
    if (number < 200) {
      this.setState(prevState => ({number: prevState.number + 10}))
    }
  }

  onBrake = () => {
    const {number} = this.state
    if (number > 0) {
      this.setState(prevState => ({number: prevState.number - 10}))
    }
  }

  render() {
    const {number} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading"> SPEEDOMETER </h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="speed-heading"> Speed is {number}mph </h1>
        <p className="paragraph"> Min Limit is 0mph, Max Limit is 200mph </p>
        <div className="button-card">
          <button
            onClick={this.onAccelerate}
            className="accelerate-btn"
            type="button"
          >
            Accelerate
          </button>
          <button onClick={this.onBrake} className="brake-btn" type="button">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
