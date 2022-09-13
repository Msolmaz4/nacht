import React ,{useContext}from "react";
import AuthContext from "../context/AuthContex";
import "./Search.css";


const Search = () => {

  const { setSearch,ara} =useContext(AuthContext)
 
 

  
  return (
    <div className="bar">
      <div className="search">
      <select  onChange={(e)=>setSearch(e.target.value)}>
        <option selected>Open this select menu </option>
          <option value="1">all</option>
          <option value="2">ELEC</option>
          <option value="3">Koz</option>
        </select>
        
        
          
        <button className="btn btn-primary mx-2" onClick={ara} >Search</button>
      </div>
    </div>
  );
}; 
export default Search;
