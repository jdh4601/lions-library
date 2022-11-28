import React from 'react';
import { Icon, Input } from 'semantic-ui-react';
import './Search.css';

const Search = () => {
  const updateInputValue = event => {
    event.preventDefault();
  };

  return (
    <>
      <div className="search-bar">
        <Input
          type="text"
          className="search-input"
          placeholder="Search title..."
          onChange={''}
          value={''}
        />
        <Icon onClick={updateInputValue} name="search" inverted link />
      </div>
    </>
  );
};

export default Search;
