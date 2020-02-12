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

export const addStory = (storyData) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(storyData)
  }

  return(dispatch) => {
    dispatch({type: 'ADDING_STORY'})
    fetch('http://localhost:3001/stories',config)
    .then(response =>{
      return response.json()
    }).then(responseJSON =>{
      dispatch({type: 'CREATE_STORY',story: responseJSON.story})
    })
  }
}

