import React from 'react';
import './App.css';
import Day from './Day.js';

class Forecast extends React.Component {
  constructor() {
    super();
    this.state = {
      forecasts: [],
      city: '',
      unitedState: '',
      code: null,
      error: 'Invalid ZIP Code',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //API with user input ZIP code
  handleSubmit(event) {
    this.setState({ code: this.element.value.toString() })
    event.preventDefault()
    fetch('https://api.weatherbit.io/v2.0/forecast/daily?postal_code=' + this.element.value.toString() + '&days=7&units=I&key=dc8528c12c254d97be043e1a8b729dfc')
    .then(response => response.json())
    .then(({city_name: city, state_code: unitedState, data: forecasts}) => this.setState({city, unitedState, forecasts}),

    //Hide Error div for valid ZIP
    document.getElementById("error").style.display = "none",document.getElementById("loc").style.display = "block")

    //Display Error div for invalid ZIP
    .catch(error => document.getElementById("error").style.display = "block");
  }

  render() {
    let forecasts = this.state.forecasts
    return (
      <div className='primeDiv'>
        <div className='secondDiv'>
          <form onSubmit={this.handleSubmit}>
            <label>
              Get Local Weather for ZIP Code: <input type="text" ref={el => this.element = el} />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <div id='error'>{this.state.error}</div>
          <h2 id='loc' className='Location'>7 Day Forecast for {this.state.city}, {this.state.unitedState}</h2>
          <div className='Forecast'>
            {forecasts.map(forecast => <Day key={forecast.datetime} myData={forecast} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default Forecast;
