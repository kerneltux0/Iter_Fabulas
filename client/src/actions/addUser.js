export function addUser(url,config) {
  return(dispatch) => {
    dispatch({type: 'LOADING_USER_ADD'})
    fetch(url,config)
    .then(response => {
      return response.json()
    }).then(responseJSON => {
      console.log(responseJSON)
      // dispatch({type: 'CREATE_USER'})
    })
  }
}