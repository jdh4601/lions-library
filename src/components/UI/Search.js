import React from 'react';
import { Icon, Input } from 'semantic-ui-react';
import './Search.css';

const SearchBar = ({ inputHandler }) => {
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
          onChange={inputHandler}
        />
        <Icon onClick={updateInputValue} name="search" inverted link />
      </div>
    </>
  );
};

export default SearchBar;
