import React, {Component} from 'react';
import Stories from '../components/stories';
import {connect} from 'react-redux';
import {fetchStories} from '../actions/storiesActions';

class StoriesContainer extends Component {

  componentDidMount() {
    this.props.fetchStories()
  }

  render() {
    return(
      <div>
        <Stories stories={this.props.stories} />
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
    fetchStories: () => dispatch(fetchStories())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(StoriesContainer);