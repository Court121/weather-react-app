import React from "react"

import "./App.css";

 export default function Unit() {
  return (
    <div className="Unit">
      <div class="row">
        <div class="col-6">
          <div class="clear-fix weather-temperature">
            <img src="" alt="Clear" id="icon" class="float-left" />
            <div class="float-left">
              <span class="temperature" id="temperature"></span>
              <span class="units">
                <a href="#" id="celsius-link">
                  ℃
                </a>
                /
                <a href="#" id="fahrenheit-link">
                  ºF
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}