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
          return Promise.all(res.map((p) => {
            return p.json();
          }))
          .then( (newsItems) => this.setState({ news: newsItems}));
        })
      })

      }
}
export default NewsContainer;
