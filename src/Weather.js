import React from "react";
import "./App.css";


export default function Weather() {
  let weatherData = {
    city: "Orlando",
    date: "Friday December 26 10:00",
    time: "10:00 AM",
    description: "Partly Cloud",
    temperature: "22",
    precipitation:"1",
    wind: "14",
    humidity: "42"
  };

  return (
    <div class="container weather-app">
      <div className="Weather">
        <div class="row">
          <div class="col-5">
            <h1 id="city">{weatherData.city}</h1>
            <ul>
              <li id="date">{weatherData.date}</li>
              <li id="description">{weatherData.description}</li>
               <img alt="" src="https://img.icons8.com/color/48/000000/partly-cloudy-day.png"/>
    <li id="temperature">{weatherData.temperature}</li>
            </ul>
            <div class="col-6">
              <ul class="hum-wind">
                <li>
                  <span id="precipitation">
                    Precipitation:{weatherData.precipitation}%
                  </span>
                </li>
                <li>
                  <span id="wind">Wind:{weatherData.wind}</span> km/h
                </li>
                <li>
                  <span id="humidity">Humidity:{weatherData.humidity}</span>%
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}