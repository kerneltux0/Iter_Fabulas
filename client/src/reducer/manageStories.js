const manageStories = (state = {stories: [], comments: [], loading: false}, action) => {
  switch(action.type){
    case 'LOADING_STORIES':
      return{
        ...state,
        stories: [...state.stories],
        loading: true
      }
    case 'ADDING_STORIES':
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