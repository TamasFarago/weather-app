import React, { Component } from 'react'
import WeatherBox from './WeatherBox'

export default class App extends Component {
  render() {
    return (
      <div className="site">
        <WeatherBox />
      </div>
    )
  }
}

