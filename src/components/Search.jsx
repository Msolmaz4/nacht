import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <div className="bar">
      <div className="search">
        <select class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">all</option>
          <option value="2">ELEC</option>
          <option value="3">Koz</option>
        </select>
        <button className="btn btn-primary mx-2">Search</button>
      </div>
    </div>
  );
};
export default Search;
