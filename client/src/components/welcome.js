import React from 'react';
import {Link} from 'react-router-dom';

const Welcome = () => {

  return(
    <div>
      <h1>Welcome to this thing</h1>
      <button><Link to={'/stories'}>Proceed to Stories</Link></button>
    </div>
  )

}

export default Welcome