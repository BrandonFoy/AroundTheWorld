import React from "react";
import IM from "../../assets/img/search-icon.svg"

const Search = () => {

  function find() {
    
} 


  return (
    <>
      <div className="search-container">
        <input id="searchbar" type="text" placeholder="Search for best place to visit "  name="search" />
        <img className="search" src={ IM } onClick={ find } alt="search" />
      </div>
    </>
  );
};

export default Search;