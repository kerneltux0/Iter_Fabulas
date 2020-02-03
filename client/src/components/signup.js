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

  submitCredentials(data) {
    const url = 'http://localhost:3001/users'
    const configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    };


  }

  handleSubmit(event) {
    event.preventDefault()
    this.submitCredentials(this.state)
  }

  render(){
    return(
      <div>
        <form onSubmit={(event)=>this.handleSubmit(event)}>
          <input onChange={(event)=>this.handleChange(event)} type='text' value={this.state.username} name='username' placeholder='username' />
          <br></br>
          <input onChange={(event)=>this.handleChange(event)} type='password' value={this.state.password} name='password' placeholder='password' />
          <br></br>
          <input onChange={(event)=>this.handleChange(event)} type='password' name='password_confirmation' placeholder='confirm password' />
          <br></br>
          <input type='submit' value='Create Account' />
        </form>
      </div>
    )
  }
}

export default Signup;