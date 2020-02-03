import React, {Component} from 'react';
import Signup from '../components/signup';
import Login from '../components/login';
import {Link} from 'react-router-dom';

class Registrations extends Component {

  render(){
    return(
      <div>
        <Link to='/signup'>Sign Up!</Link>
      </div>
    )
  }
}

export default Registrations