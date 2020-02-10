import React, {Component} from 'react';
import Stories from '../components/stories';
import {connect} from 'react-redux';
import {fetchStories, addStory} from '../actions/storiesActions';

class StoriesContainer extends Component {

  componentDidMount() {
    this.props.fetchStories()
  }

  render() {
    return(
      <div>
        <Stories stories={this.props.stories} addStory={this.props.addStory}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    stories: state.stories,
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchStories: () => dispatch(fetchStories()),
    addStory: (story) => dispatch(addStory(story))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(StoriesContainer);