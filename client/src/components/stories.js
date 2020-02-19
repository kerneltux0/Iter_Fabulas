import React, {Component} from 'react';
import StoryInput from './storyInput';
import {Link} from 'react-router-dom';
import '../App.css'


class Stories extends Component {
  state={
    sorted: false
  }

// handleSort() {
//   if(this.state.sorted===true){
//     this.setState({
//       sorted: false
//     })
//   }else{
//     this.setState({
//       sorted: true
//     })
//   }
//   const sortingStories = this.props.stories
//   sortingStories.sort(function)
// }

  render(){

    if(this.props.loading === true){
      return(<div className="App">
        <h1>Loading...</h1>
      </div>)
    }else{
      return(
        <div className="App">
          <h1>Our List of Stories</h1>
          <div className="story-list">
            <label>Sort Alphabetically</label>
          {/* <input type='checkbox' onClick={()=>this.handleSort()} /> */}
            {this.props.stories.map(story => {
              return(
                <p>
                <Link to={{
                  pathname: `/stories/${story.id}`,
                  story: story
                }}>{story.title}
                </Link>
                </p>
              )
            })}
          </div>
          <div>
            <StoryInput addStory={this.props.addStory}/>
          </div>
        </div>
      )
    }

  }
}

export default Stories