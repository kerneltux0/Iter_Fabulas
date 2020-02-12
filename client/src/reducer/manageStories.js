const manageStories = (state = {stories: [], comments: [], loading: false}, action) => {
  switch(action.type){
    case 'LOADING_STORIES':
      return{
        ...state,
        stories: [...state.stories],
        loading: true
      }
    case 'ADDING_STORY':
      return{
        ...state,
        stories: [...state.stories],
        loading: true
      }
    case 'ADDING_LIKE':
      return{
        ...state,
        stories: [...state.stories],
        loading: true
      }
    case 'UPDATING_LIKES':
      let storyLikes = state.stories.find(story => story.id===action.story.id)
      return{
        ...state,
        stories: [...state.stories,storyLikes],
        loading: false
      }
    case 'CREATE_STORY':
      let story = {id: action.story.id, title: action.story.title, location: action.story.location, name: action.story.name, content: action.story.content, likes: action.story.likes}
      return{
        ...state,
        stories: [...state.stories,story],
        loading: false
      }
    case 'FETCH_STORIES':
      return{
        ...state,
        stories: action.stories,
        loading: false
      }
    default:
      return state
  }
}

export default manageStories