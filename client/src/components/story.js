import React from 'react';

const Story = (props) => {
  console.log(props.location.story)

  return(
    <div>
      <h1>
        Story page
      </h1>
    </div>
  )
}

export default Story