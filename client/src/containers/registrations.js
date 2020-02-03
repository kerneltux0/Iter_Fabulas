import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Registrations extends Component {

  render(){
    return(
      <div>
        <button>
          <Link to='/signup'>Sign Up!</Link>  
        </button>
        <button>
          <Link to='/login'>Login!</Link>
        </button>
      </div>
    )
  }
}

export default Registrations