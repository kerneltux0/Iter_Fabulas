export function addUser(url,config) {
  console.log('add user action:',config)
  return(dispatch) => {
    dispatch({type: 'LOADING_USER_ADD'})
    fetch(url,config)
    .then(response => {
      return response.json()
    }).then(responseJSON => {
      console.log(responseJSON)
      if(responseJSON.error){
        dispatch({type: 'CREATION_ERROR', responseJSON})
      }else{
        dispatch({type: 'CREATE_USER', responseJSON})
      }
  
    })
  }
}