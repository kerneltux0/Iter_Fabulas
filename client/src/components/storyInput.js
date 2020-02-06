import React, {Component} from 'react';

class StoryInput extends Component {

  render(){
    return(
      <div>
        <form>
          <input type='text' name='title' value='state.title' placeholder='Story Title' />
          <br />
          <input type='text' name='name' value='state.name' placeholder='Your Name' />
          <br />
          <input type='text' name='location' value='state.location' placeholder='Story Location' />
          <br />
          <textarea rows={10} cols={30} name='content' value='state.content' placeholder='Your Story'/>
          <br />
          <input type='submit' value='Submit Your Story' />
        </form>
      </div>
    )
  }
}

export default StoryInput