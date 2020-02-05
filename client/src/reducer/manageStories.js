const manageStories = (state = {user: {}, stories: [], loading: false, logged_in: false}, action) => {
  switch(action.type){
    case 'LOADING_USER_ADD':
      return{
        ...state,
        user: {...state.user},
        loading: true
      }
    case 'CREATE_USER':
      return{
        ...state,
        user: action.user,
        loading: false,
        logged_in: true
      }
    case 'CREATION_ERROR':
      return{
        message: action.error,
        loading: false
      }
    default:
      return state
  }
}

export default manageStories