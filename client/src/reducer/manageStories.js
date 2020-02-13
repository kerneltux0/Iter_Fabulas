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
    case 'ADDING_COMMENT':
      return{
        ...state,
        comments: [...state.comments],
        loading: true
      }
    case 'CREATE_STORY':
      let story = {id: action.story.id, title: action.story.title, location: action.story.location, name: action.story.name, content: action.story.content, likes: action.story.likes}
      return{
        ...state,
        stories: [...state.stories,story],
        loading: false
      }
    case 'CREATE_COMMENT':
      let comment = {id: action.comment.id, content: action.comment.content, storyId: action.comment.story_id}
      return{
        ...state,
        comments: [...state.comments,comment],
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