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

  componentDidMount(){
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then((res) => res.json())
      .then((res) => {
        const urls = res.map((id) => {
            return `https://hacker-news.firebaseio.com/v0/item/${id}.json`
        })
        Promise.all(urls.map((url) => {
          return fetch(url);
        }))
        .then((res) => {
          return res.map((res1) => {
            return res1.json();
          })
        })
        .then((res) => {this.setState({news: res})})
      })

      }
}
export default NewsContainer;
