import React, {Component} from 'react';

class Signup extends Component {
  state = {
    username: '',
    password: '',
    password_confirmation: ''
  }

  render(){
    return(
      <div>
        <form>
          <input type='text' value={this.state.username} name='username' placeholder='username' />
          <input type='password' value={this.state.password} name='password' placeholder='password' />
          <input type='password' value={this.state.password_confirmation} name='password confirmation' placeholder='confirm password' />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default Signup