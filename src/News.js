import React from 'react';
import Story from './Story.js';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  forecasts: [],
                    displayAmount: 10,
                    isLoaded: false
                  };
                }

  componentWillMount() {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=')
    .then(response => response.json())
    .then(({articles: forecasts}) => this.setState({forecasts}))
  };

  render() {
    let forecasts = this.state.forecasts
    console.log(this.state.forecasts)
    return (
      <div>
        <h1>Headlines</h1>
        <div className='News'>
          {forecasts.map(forecast => <Story key={forecast.title} storyData={forecast} />)}
        </div>
      </div>
    )
  }
}

export default News;
