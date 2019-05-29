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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render(){
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit}/>
        <ListNews news={this.state.filteredNews} />
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
          const filtered = this.state.news.filter((newsItem) => {
            return newsItem.title.toLowerCase().includes(evt.target.keyword.value.toLowerCase());
          })
          this.setState({filteredNews: filtered});
          console.log(filtered);
      }
}
export default NewsContainer;
