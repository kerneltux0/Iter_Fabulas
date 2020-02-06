import React, {Component} from 'react';

class Story extends Component {

  render(){
    return(
      <div>
        {console.log(this.props.location.state)}
      </div>
    )
  }
}

export default Story