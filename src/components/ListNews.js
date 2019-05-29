import React from 'react';
import NewsItem from './NewsItem';

const ListNews = (props) => {

  if (props.allNews.length === 0) {
    return (
      <div>
      <h2>Loading...</h2>
      </div>
    )
  }
  const items = props.filteredNews.map((item) => {
    return <NewsItem newsItem = {item} />
  })

  return (
    <div>
    <h2>{items.length > 0 ? `${items.length} Matching News Article${items.length > 1 ? 's' : ''} Found` : "No Matching Articles Found"}</h2>
      {items}
    </div>
  )
}
export default ListNews;
