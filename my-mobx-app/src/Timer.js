import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      seconds: 0,
      screams: "", 
      count: 0
    };

    this.incrementCount = this.incrementCount.bind(this);
    this.checkScreams = this.checkScreams.bind(this);
  }

  checkScreams() {
    if (this.state.screams.length >= 15) {
      this.setState(
          state => ({
            screams: "",
            count: state.count - 10  
          })
        );
    }
  }

  tick() {
    this.setState(
      state => ({
        seconds: state.seconds + 1,
        screams: state.screams + "a"
        })
      );
    this.checkScreams();
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmout() {
    clearInterval(this.interval);
  }

  incrementCount() {
    this.setState(
      state => ({count: state.count + 1})
        );
  }

  render() {
    return (
      <div>
        <div>Seconds: {this.state.seconds}</div>
        <div>Screams: {this.state.screams}</div>
        <div>Count: {this.state.count}</div>
        <button onClick={this.incrementCount}>Click me</button>
      </div>
      )   
  } 
}

export default Timer;