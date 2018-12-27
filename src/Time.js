import React, { Component } from 'react';

export class Time extends Component {
  constructor(props) {
    super(props);
    let time = new Date();
    this.state = {
      day: time.getDay(),
      month: time.getMonth(),
      date: time.getDate(),
      year: time.getFullYear(),
      time: time.toLocaleTimeString()
    };
    this.countingSecond = this.countingSecond.bind(this)
  }
  componentDidMount() {
    this.intervalID = setInterval(
        () => this.countingSecond(),
        1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  countingSecond() {
    let time = new Date()
    this.setState({
      day: time.getDay(),
      month: time.getMonth(),
      date: time.getDate(),
      year: time.getFullYear(),
      time: time.toLocaleTimeString()
    });
  }

  render() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return (
        <div className='timeclock-main'>
          <h3 className='timeclock-text'>{days[this.state.day]}, {this.state.date} {months[this.state.month]} {this.state.year} {this.state.time}</h3>
        </div>
    );
  }
}

