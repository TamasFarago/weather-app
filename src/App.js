import React, { Component } from 'react'
import Class from "./Class"
import SearchBar from "./SearchBar"

const api = {
  key: "cd136a1ec143e3bd9413139ceeb924c4",
  base: "https://api.openweathermap.org/data/2.5/"
}

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {query: "", weather: ""}
    this.handleChange = this.handleChange.bind(this)

  }

  // search = evt => {
  //   if (evt.key === "Enter") {
  //     fetch(`${api.base}weather?q=${this.state.query}&units=metric&APPID=${api.key}`)
  //     .then(res => res.json())
  //     .then(result => {
        
  //       this.setState({query: "", weather: [...this.state.weather, result]})
        
  //       console.log(this.state.weather[0].main.temp)
  //     })
  //   }
  // }

  handleChange(e){
    this.setState({query: e.target.value})
}

  render() {
    return (
      <div>
        
        <Class 
          weather={[this.state.weather]}
        />
      </div> 
    )
  }
}

