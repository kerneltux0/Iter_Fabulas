export const fetchStories = () => {
  return(dispatch) => {
    dispatch({type: 'LOADING_STORIES'})
    fetch('localhost:3001/api/v1/')
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
    fetch('localhost:3001/api/v1/stories',config)
    .then(response =>{
      return response.json()
    }).then(responseJSON =>{
      dispatch({type: 'CREATE_STORY',story: responseJSON.story})
    })
  }
}

export const addComment = (storyId,comment) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(comment)
  }

  return(dispatch) => {
    dispatch({type: 'ADDING_COMMENT'})
    fetch(`localhost:3001/api/v1/stories/${storyId}/comments`,config)
    .then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({type: 'CREATE_COMMENT', comment: responseJSON.comment})
    })
  }
  
}

export const fetchComments = (storyId) => {
  return(dispatch) => {
    dispatch({type: 'LOADING_COMMENTS'})
    fetch(`localhost:3001/api/v1/stories/${storyId}/comments`)
    .then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({type: 'FETCH_COMMENTS',comments: responseJSON.comments})
    })
  }
}