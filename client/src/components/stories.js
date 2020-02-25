import React, {Component} from 'react';
import StoryInput from './storyInput';
import {Link} from 'react-router-dom';
import '../App.css'


class Stories extends Component {
  state={
    sorted: false,
    search: ''
  }

handleSort() {
  const sortingStories = [...this.props.stories]
  sortingStories.sort(function(a,b){
    let titleA = a.title.toUpperCase()
    let titleB = b.title.toUpperCase()
    if (titleA < titleB){
      return -1
    }
    if (titleA > titleB){
      return 1
    }
    return 0
  })
  return sortingStories
}

handleChange(event) {
  this.setState({
    [event.target.name]: event.target.value
  })
}

searchStories(term) {
  const storySearch = [...this.props.stories]

  

  // console.log('copy of props.stories:',storySearch)
  // console.log('state in searchStories:',this.state)
  // console.log('passed-in term:',term)

  // let searchFilter = storySearch.filter(story => story.title === term)
  // console.log('search filter:',searchFilter)
  
}

handleSearch(event) {
  event.preventDefault()
  this.searchStories(this.state.search)
  this.setState({
    search: ''
  })
}

updateSorted() {
  if(this.state.sorted===true){
    this.setState({
      sorted: false
    })
  }else{
    this.setState({
      sorted: true
    })
  }
}

  render(){
    const stories = (state) =>{
      if(state.sorted===true){
        return this.handleSort()
      }
      if(state.sorted===false){
        return this.props.stories
      }
      if(state.search !== ''){
        return this.searchStories(state.search)
      }
    }
    // let stories = (this.state.sorted===true) ? this.handleSort() : this.props.stories

    if(this.props.loading === true){
      return(<div className="App">
        <h1>Loading...</h1>
      </div>)
    }else{
      return(
        <div className="App">
          <h1>Our List of Stories</h1>
          <div className="story-list">
            <form onSubmit={(event)=>this.handleSearch(event)}>
              <input onChange={(event)=>this.handleChange(event)} type='text' name='search' value={this.state.search} placeholder='search' />
              <input type='submit' value='Search' />
            </form><br/>
            <label>Sort Alphabetically</label>
            <input type='checkbox' onClick={()=>this.updateSorted()} />
            {stories(this.state).map(story => {
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