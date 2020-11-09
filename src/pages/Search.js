import React from "react";
import SearchBar from "../components/SearchBar";

const Search = ({onSearchSubmit}) => {
  return (
    <>
      <SearchBar onSearchSubmit={onSearchSubmit}/>
    </>
  );
};

export default Search;
