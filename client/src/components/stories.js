import React, {Component} from 'react';

class Stories extends Component {

  render(){
    const storyList = this.props.stories.map(story => {
      return(<li>{story.title}</li>)
    })
    return(
      <div>
        <h1>Stories appear here!</h1>
        <ul>
          {storyList}
        </ul>
      </div>
    )
  }
}

export default Stories