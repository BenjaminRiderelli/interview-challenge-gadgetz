import React from "react";
import style from './productlist.module.css'

const SEARCH = ({handleSearchOnChange}) => {


  return (
    <div className={style.searchBarContainer}>
      <label htmlFor="search-input">
        <p>Search</p>
        <input
          onChange={handleSearchOnChange}
          id="search-input"
          className={style.searchInput}
          type="text"
          placeholder="Type in a brand or model"
        />
      </label>
    </div>
  );
};

export default SEARCH;
