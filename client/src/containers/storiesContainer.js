import React, {Component} from 'react';
import Stories from '../components/stories';
import {connect} from 'react-redux';
import {fetchStories} from '../actions/storiesActions';

class StoriesContainer extends Component {

  render() {
    return(
      <div>
        <Stories />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchStories: dispatch(fetchStories())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(StoriesContainer);