import React, {Component} from 'react';
import Stories from '../components/stories';
import {connect} from 'react-redux';
import {fetchStories} from '../actions/storiesActions';
import Story from '../components/story'
import {Route, Switch} from 'react-router-dom';

class StoriesContainer extends Component {

  componentDidMount() {
    this.props.fetchStories()
  }

  render() {
    return(
      <div>
        <Switch>
          <Route path={`/stories/:storyId`} component={Story} />
        </Switch>
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