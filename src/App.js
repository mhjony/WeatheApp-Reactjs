import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "e13541f3141d8d26404fb3e8c0ae8866";

class App extends Component {

  state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
  }

    getWeather = async (e) =>{
        e.preventDefault();
        const city = e.target.elements.city.value; //here we grab the value from input field from Form.js
        const country = e.target.elements.country.value; //here we grab the value from input field from Form.js
        const api_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);
        const data = await api_call.json();

        if(city && country){

        this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: ""
          })

        } 
        else {
          this.setState({
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: "Please enter city and country"
        })
        }
        
    }

  render() {
    return (
      <div>        
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-sm-5 title-container">
                  <Title />                  
                </div>
                <div class="col-sm-7 form-container">
                  <Form getWeather={this.getWeather}/>
                  <Weather 
                    tapmatra={this.state.temperature} //these values have been sent to weather.js as props
                    sohor={this.state.city}
                    desh={this.state.country}
                    soitto={this.state.humidity}
                    bornona={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


