import React, { Component } from 'react'
import './App.css';



export default class Class extends Component {
    constructor(props){
        super(props);
        
        this.dateBuilder = this.dateBuilder.bind(this)
        this.handleChange = this.handleChange.bind(this)
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
            <div className={(typeof this.props.weather.main != "undefined") ? ((this.props.weather.main.temp > 16) ? "App warm"
    : "App cold") : "App cold"}>
      
      <main>
        
        {(typeof this.props.weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">{this.props.weather.name}, {this.props.weather.sys.country}</div>
              <div className="date">{this.dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(this.props.weather.main.temp)}°c
              </div>
              <div className="weather">
                {this.props.weather.weather[0].main}
              </div>
              
            </div>
        </div>
        ) : ("")}
        
      </main>
      
    </div>
        )
    }
}
