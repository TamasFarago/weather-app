import React, { Component } from 'react'
import './App.css';

const api = {
  key: "cd136a1ec143e3bd9413139ceeb924c4",
  base: "https://api.openweathermap.org/data/2.5/"
}

export default class Class extends Component {
    constructor(props){
        super(props);
        this.state = {query: "", weather: ""}
        this.search = this.search.bind(this)
        this.dateBuilder = this.dateBuilder.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    search = evt => {
        if (evt.key === "Enter") {
          fetch(`${api.base}weather?q=${this.state.query}&units=metric&APPID=${api.key}`)
          .then(res => res.json())
          .then(result => {
            this.setState({query: "", weather: result})
            
            console.log(result)
          })
        }
      }

      dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear()
    
        return `${day} ${date} ${month} ${year}`
      }

      handleChange(e){
          this.setState({query: e.target.value})
      }


    render() {
        return (
            <div className={(typeof this.state.weather.main != "undefined") ? ((this.state.weather.main.temp > 16) ? "App warm"
    : "App cold") : "App cold"}>
      
      <main>
        <div className="search-box">
         <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={this.handleChange}
            value={this.state.query}
            onKeyPress={this.search}></input>
        </div>
        {(typeof this.state.weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">{this.state.weather.name}, {this.state.weather.sys.country}</div>
              <div className="date">{this.dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(this.state.weather.main.temp)}°c
              </div>
              <div className="weather">
                {this.state.weather.weather[0].main}
              </div>
              
            </div>
        </div>
        ) : ("")}
        
      </main>
      
    </div>
        )
    }
}
