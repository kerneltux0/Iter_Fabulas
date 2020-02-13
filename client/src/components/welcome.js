import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css'

const Welcome = () => {

  return(
    <div className="App">
      <h1>Welcome to Iter Fabulas!</h1>
      <h3 className="iter-intro">
        One of the greatest gifts we can give to each other is share stories of when we took ourselves out of our comfort zones and experienced another culture.  Here you can post & read travel stories, and hopefully develop more of a humanity first perspective.
      </h3>
      <button><Link to={'/stories'}>Proceed to Stories</Link></button>
    </div>
  )

}

export default Welcome