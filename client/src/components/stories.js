import React, {Component} from 'react';
import StoryInput from './storyInput';
import {Link} from 'react-router-dom';
import '../App.css'


class Stories extends Component {

  render(){

    if(this.props.loading === true){
      return(<div className="App">
        <h1>Loading...</h1>
      </div>)
    }else{
      return(
        <div className="App">
          <h1>Stories appear here!</h1>
          <ul>
            {this.props.stories.map(story => {
              return(
                <li>
                  <Link to={{
                    pathname: `/stories/${story.id}`,
                    story: story
                  }}>{story.title}</Link>
                </li>
              )
            })}
          </ul>
          <div>
            <StoryInput addStory={this.props.addStory}/>
          </div>
        </div>
      )
    }

  }
}

export default Stories