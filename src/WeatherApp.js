import React, {Component} from 'react';
import cloud from './cloud.png';
import haze from './haze.png';
import rain from './rain.png';
import './App.css';


export class WeatherApp extends Component{
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
      city: '',
      humidity: '',
      description: '',
    }
  }

  async componentDidMount() {
    const api_key_weather = '26f7d92635dd0fa76b5fa962eb9d3d96'
    const api_call_weather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Depok,ID&APPID=${api_key_weather}`)
    const responseWeather = await api_call_weather.json();
    this.setState ({
      temperature: Math.floor(responseWeather.main.temp - 273),
      city: responseWeather.name,
      humidity: responseWeather.main.humidity,
      description: responseWeather.weather[0].description
    });
    const test = this.state.description.split(" ")
    console.log(test)
  }

  render() {
    if(this.state.description.split(" ")[1] === 'clouds') {
      return (
          <div>
            <h4> Today Weather in {this.state.city} : {this.state.description}</h4>
            <div className="weather">
              <div className="cellWeather cell-1">
                <img src={cloud} className="cloud-logo" alt="cloud" />
              </div>
              <div className="cellWeather cell-2">
                <h2> Temperature : {this.state.temperature} </h2>
                <br/>
                <br/>
                <h2> Humidity : {this.state.humidity} </h2>
              </div>
            </div>
          </div>
      )
    } else if (this.state.description === 'haze') {
      return (
          <div>
            <h4> Today Weather in {this.state.city} : {this.state.description}</h4>
            <div className="weather">
              <div className="cellWeather cell-1">
                <img src={haze} className="cloud-logo" alt="cloud" />
              </div>
              <div className="cellWeather cell-2">
                <h2> Temperature : {this.state.temperature} </h2>
                <br/>
                <br/>
                <h2> Humidity : {this.state.humidity} </h2>
              </div>
            </div>
          </div>
      )
    } else if (this.state.description.split(" ")[1] === 'rain') {
      return (
          <div>
            <h4> Today Weather in {this.state.city} : {this.state.description}</h4>
            <div className="weather">
              <div className="cellWeather cell-1">
                <img src={rain} className="cloud-logo" alt="cloud" />
              </div>
              <div className="cellWeather cell-2">
                <h2> Temperature : {this.state.temperature} </h2>
                <br/>
                <br/>
                <h2> Humidity : {this.state.humidity} </h2>
              </div>
            </div>
          </div>
      )
    } else {
      return <h1> WEATHER APP FAILURE!!!!!!!</h1>
    }
  }
}