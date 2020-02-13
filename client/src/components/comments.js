import React, {Component} from 'react';
import Comment from './comment';
import '../App.css'

class Comments extends Component {

  componentDidMount () {
    this.props.fetchComments(this.props.story.id)
  }


  render() {
    
    if(this.props.loading===true){
      return(<div className="App">
        <h1>Loading...</h1>
      </div>)
    }else{
      return(
        <div className="App">
          {this.props.comments.map(comment => {
            return(<Comment comment={comment} />)
          })}
        </div>
      )
    }
  }
}

export default Comments