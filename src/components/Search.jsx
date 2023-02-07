import React from "react";
import { MdSearch } from "react-icons/md";
import "./Search.css";

const Search = ({ handleSearchNotes }) => {
  return (
    <div className="search">
      <MdSearch className="search-icons" size="2rem" />
      <input
        onChange={(event) => handleSearchNotes(event.target.value)}
        type="text"
        placeholder="search your notes here...."
      />
    </div>
  );
};

export default Search;
