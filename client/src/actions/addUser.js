import {push} from 'react-router-redux';

export function addUser(url,config) {
  return(dispatch) => {
    dispatch({type: 'LOADING_USER_ADD'})
    fetch(url,config)
    .then(response => {
      return response.json()
    }).then(responseJSON => {
      if(responseJSON.error){
        console.log('action error:',responseJSON)
        dispatch({type: 'CREATION_ERROR', responseJSON})
      }else{
        let user = responseJSON.user
        dispatch({type: 'CREATE_USER', user})
        dispatch(push('/home'))
      }
  
    })
  }
}