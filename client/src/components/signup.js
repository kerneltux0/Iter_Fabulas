import React, {Component} from 'react';


class Signup extends Component {
  state = {
    username: '',
    password: '',
    password_confirmation: ''
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {

  }

  render(){
    return(
      <div>
        <form onSubmit={(event)=>this.handleSubmit(event)}>
          <input onChange={(event)=>this.handleChange(event)} type='text' value={this.state.username} name='username' placeholder='username' />
          <input onChange={(event)=>this.handleChange(event)} type='password' value={this.state.password} name='password' placeholder='password' />
          <input onChange={(event)=>this.handleChange(event)} type='password' name='password confirmation' placeholder='confirm password' />
          <input type='submit' value='Create Account' />
        </form>
      </div>
    )
  }
}

export default Signup;