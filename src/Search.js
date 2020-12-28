import React from "react";
import "./App.css";

export default function Search(){
    return(
       <div className="Search">
      <form className="form-inline">
          <div className="form-group mx-sm-3 mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Enter city name"
              autoComplete="off"
            />
          </div>
          <button type="submit" className="btn btn-primary mb-2 searchButton">
            Search
          </button>
          <button type="submit" className="btn btn-primary mb-2 searchButton">
            Current location
          </button>
        </form>
      </div>
    
  );
}

