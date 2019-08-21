import React from 'react';
import './App.css';
import Day from './Day.js';
import Forecast from './Forecast.js';
import News from './News';

class App extends React.Component {
  render() {
    // let forecasts = this.state.forecasts
    return (
      <div>
        <Forecast />
        <News />
      </div>
    );
  }
}

export default App;
