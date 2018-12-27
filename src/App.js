import React, { Component } from 'react';
import './App.css';
import {WeatherApp} from "./WeatherApp";
import {Suggestion} from "./Suggestion";
import {Time} from "./Time";


class App extends Component {
  render() {
    return (
        <header className="App-header">
          <div className="App">
            <h1> Welcome Alham Febian Rinaldy!</h1>
            <Time />
            <WeatherApp />
            <br/>
            <br/>
            <h3> What do you like to do? </h3>
            <Suggestion />
          </div>
        </header>
    );
  }
}

export default App;
