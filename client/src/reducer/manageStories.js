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
      console.log('reducer state',state)
      console.log('reducer action',action)
      let storyLikes = state.stories.find(story => story.id===action.story.id)
      return{
        ...state,
        storyLikes,
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