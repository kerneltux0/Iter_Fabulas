import React from 'react';

const Comment = (props) => {

  return(
    <div>
      <h1>{props.comment.content}</h1>
    </div>
  )
}

export default Comment