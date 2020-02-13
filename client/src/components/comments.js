import React, {Component} from 'react';
import Comment from './comment';

class Comments extends Component {

  componentDidMount () {
    this.props.fetchComments(this.props.story.id)
  }


  render() {
    
    if(this.props.loading===true){
      return(<h1>Loading...</h1>)
    }else{
      return(
        <div>
          {this.props.comments.map(comment => {
            return(<Comment comment={comment} />)
          })}
        </div>
      )
    }
  }
}

export default Comments