import React, {Component} from 'react';
import StoryInput from './storyInput';
import {Link} from 'react-router-dom';


class Stories extends Component {

  render(){

    if(this.props.loading === true){
      return(<h1>Loading...</h1>)
    }else{
      return(
        <div>
          <h1>Stories appear here!</h1>
          <ul>
            {this.props.stories.map(story => {
              return(
                <li>
                  <Link to={{
                    pathname: `/stories/${story.id}`,
                    story: story,
                    addLike: this.props.addLike
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