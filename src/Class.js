import React, { Component } from 'react'
import './App.css';
import axios from "axios"

const api = {
  key: "cd136a1ec143e3bd9413139ceeb924c4",
  base: "https://api.openweathermap.org/data/2.5/"
}

export default class Class extends Component {
  constructor(props){
    super(props);
    this.state = {query: "", weather: []}
    this.handleChange = this.handleChange.bind(this)
        this.search = this.search.bind(this)
        this.dateBuilder = this.dateBuilder.bind(this)
        
       
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

     
        search = e => {
          
          if (e.key === "Enter") {
            this.seenWeather = new Set(this.state.weather.map(w => w.name))
            console.log(this.seenWeather)
          axios({
            url: `${api.base}weather?q=${this.state.query}&units=metric&APPID=${api.key}`
          })
          .then(response => {
            let data = response.data
            if(!this.seenWeather.has(data.name)) {
              this.setState({
                weather: [...this.state.weather, data]
              })
            } else {
              alert("You've already added this location")
            }
          
          })
          console.log(this.state.weather)
        }
        
        }
      
      handleChange(e){
        this.setState({query: e.target.value})
    }

    componentDidUpdate(){
      localStorage.setItem("dataWeather", JSON.stringify(this.state.weather))
      
  }

  componentWillMount(){
    const dataWeather = JSON.parse(localStorage.getItem("dataWeather"))
    if(dataWeather !== null){
        this.setState({weather: dataWeather})
    }
   
}


    render() {
       
        // console.log(this.props.weather.name)
        return (
          <>
          <div className="main">
            <div className="site">
            <div className="search-box">
            <input
                type="text"
                className="search-bar"
                placeholder="Search..."
                onChange={this.handleChange}
                value={this.state.query}
                onKeyPress={this.search}></input>
            </div>
           <div className="app-container">
             
            {this.state.weather.map(el => {
              
              return ( 
                
              <div className={el.main.temp > 16 ? "warm App" : "cold App"}>
                <div>
            <div className="location-box">
              <div className="location">{el.name}, {el.sys.country}</div>
              <div className="date">{this.dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(el.main.temp)}°c
              </div>
              
             
            </div>
                <div className="weather-type">{el.weather[0].main}</div>
        </div>
              </div>
              )
            })}
             </div>
            </div>
            </div>
            </>

        )}}