import React from 'react';

const SearchBar = (props) => {
  const onSubmit = (evt) =>{
    evt.preventDefault();
    evt.persist();
    props.onSubmit(evt);
  }
  return (
    <div>
      <h2>Enter Keyword to Search:</h2>
      <form id="searchform" name="searchform" onSubmit={onSubmit} method = '' >
        <input
                name="keyword" type="text" 
                disabled = {!props.loaded}
                placeholder={!props.loaded ? "Still loading..." : "Enter Keyword"}
        />
      </form>
    </div>
  )
}
export default SearchBar;
