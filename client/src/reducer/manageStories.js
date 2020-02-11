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
      let storyLikes = state.stories.find(story => story.id===action.id)
      return{
        storyLikes,
        loading: false
      }
    case 'CREATE_STORY':
      let story = {title: action.title, location: action.location, name: action.name, content: action.content, likes: action.likes}
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