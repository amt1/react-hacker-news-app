import React, {Component} from 'react';
import ListNews from '../components/ListNews';
import SearchBar from '../components/SearchBar';

class NewsContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      news: [],
      filteredNews: []
    }
  }

  render(){
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit}/>
        <ListNews news={this.state.news} />
      </div>
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

      handleSubmit(evt){
          console.log(evt.target.keyword.value);
      }
}
export default NewsContainer;
