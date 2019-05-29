import React from 'react';

const NewsItem = (props) => {
  if (!props.newsItem.url) return <></>;
  return (<
    div>
      <h3>{props.newsItem.title}</h3>
      <p><a href={props.newsItem.url}>Source: {props.newsItem.url}</a></p>
    </div>)

}
export default NewsItem;
