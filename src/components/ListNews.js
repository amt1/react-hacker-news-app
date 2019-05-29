import React from 'react';
import NewsItem from './NewsItem';

const ListNews = (props) => {

  const items = props.news.map((item) => {
    return <NewsItem newsItem = {item} />
  })
  return <div>{items}</div>;

}
export default ListNews;
