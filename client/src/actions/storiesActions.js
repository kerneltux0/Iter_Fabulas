export const fetchStories = () => {
  return(dispatch) => {
    dispatch({type: 'LOADING_STORIES'})
    fetch('http://localhost:3001')
    .then(response =>{
      return response.json()
    }).then(responseJSON => {
      dispatch({type: 'FETCH_STORIES',stories: responseJSON.stories})
    })
  }
}

export const addStory = () => {
  return(dispatch) => {
    dispatch({type: 'ADDING_STORY'})
    fetch('')
  }
}