import React from 'react';

const SearchBar = (props) => {
  const onSubmit = (evt) =>{
    evt.preventDefault();
    evt.persist();
    props.onSubmit(evt);
  }
  return (
    <div>
      <form id="searchform" name="searchform" onSubmit={onSubmit} method = '' >
        <input name="keyword" type="text" />
      </form>
    </div>
  )
}
export default SearchBar;
