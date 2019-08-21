import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

let another = [{day: 'wed', low: 56, high: 88}, {day: 'thur', low: 42, high: 93}, {day: 'fri', low: 7, high: 90}]

class Forecast2 extends React.Component {
  constructor() {
    super();
    this.state = {
      forecasts: [],
      city: '',
      code: 49001,
    };
  }

  componentWillMount() {
    fetch('https://api.weatherbit.io/v2.0/forecast/daily?postal_code=' + this.state.code.toString() + '&days=7&units=I&key=')
    .then(response => response.json())
    .then(({data: forecasts, city_name: city}) => this.setState({forecasts, city}))
  };

  render() {
    let forecasts = this.state.forecasts
    let city = this.state.city
    console.log(forecasts)
    // city = city.substring(0, city.length - 2) + ' ' + city.substring(city.length - 2, city.length)
    return (
      <div className='primeDiv'>
        <h2 className='Location'>7 Day Forecast for {city}</h2>
        <div className='secondDiv'>

          <div className='Forecast'>
            {forecasts.map(forecast => <Day key={forecast.datetime} myData={forecast} />)}
          </div>
        </div>
      </div>
    );
  }
}


class Day extends React.Component {
  stringDayofWeek(number) {
    let dayString = ''
    if (number === 0) {
      dayString = 'Mon'
    }
    if (number === 1) {
      dayString = 'Tues'
    }
    if (number === 2) {
      dayString = 'Wed'
    }
    if (number === 3) {
      dayString = 'Thur'
    }
    if (number === 4) {
      dayString = 'Fri'
    }
    if (number === 5) {
      dayString = 'Sat'
    }
    if (number === 6) {
      dayString = 'Sun'
    }
    return dayString
  }

  render() {
    let codeUrl = 'https://www.weatherbit.io/static/img/icons/' + this.props.myData.weather.icon +'.png'
    let dayOfWeek = new Date(this.props.myData.datetime).getDay()
    let dayString = this.stringDayofWeek(dayOfWeek)

    return (
      <div className='Day'>
        <div className='dayOfWeek'>{dayString}</div>
        <img className='dayPic' src={codeUrl} />
        <div className='dayRange'>
          <div className='dayLow'>{this.props.myData.min_temp}</div>
          <div className='dayHigh'>{this.props.myData.max_temp}</div>
        </div>
      </div>
    );
  }
}

export default Forecast2;
