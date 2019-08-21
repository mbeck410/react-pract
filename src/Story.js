import React from 'react';
import './Story.css';

class Story extends React.Component {
  render() {
    return (
      <div className="Story">
        <div className="storyHead">
          <h2>{this.props.storyData.title}</h2>
          <div className="storyInfo">
            <div>{this.props.storyData.author}</div>
            <div>{this.props.storyData.publishedAt}</div>
          </div>
        </div>
        <h4>{this.props.storyData.description}</h4>
      </div>
    )
  }
}

export default Story;
