import React, {Component} from 'react';

class StoryInput extends Component {
  state = {
    title: '',
    name: '',
    location: '',
    content:'',
    likes: 0
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
  }

  render(){
    return(
      <div>
        <form onSubmit={(event)=>this.handleSubmit(event)}>
          <input onChange={(event)=>this.handleChange(event)} type='text' name='title' value={this.state.title} placeholder='Story Title' />
          <br />
          <input onChange={(event)=>this.handleChange(event)} type='text' name='name' value={this.state.name} placeholder='Your Name' />
          <br />
          <input onChange={(event)=>this.handleChange(event)} type='text' name='location' value={this.state.location} placeholder='Story Location' />
          <br />
          <textarea onChange={(event)=>this.handleChange(event)} rows={10} cols={30} name='content' value={this.state.content} placeholder='Your Story'/>
          <br />
          <input type='submit' value='Submit Your Story' />
        </form>
      </div>
    )
  }
}

export default StoryInput