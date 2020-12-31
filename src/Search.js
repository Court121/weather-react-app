import React from "react";
import "./App.css";

export default function Search(){
    return(
       <div className="Search">
      <div className="search-box">
          <input type="text" className="search-bar" placeholder="Enter City" />
          <button type="submit" className="btn btn-primary mb-2 searchButton">
            Search
          </button>
          <button type="submit" className="btn btn-primary mb-2 searchButton">
            Current location
          </button>
        </div>
      </div>
    
  );
}

