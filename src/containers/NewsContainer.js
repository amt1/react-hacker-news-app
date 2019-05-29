import React, {Component} from 'react';

class NewsContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      news: []
    }
  }

  render(){
    return (
      <div>Hi I'm a News Container.</div>
    );
  }

}
export default NewsContainer;
