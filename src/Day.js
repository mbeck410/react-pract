import React from 'react';
import './Day.css';

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

export default Day;
