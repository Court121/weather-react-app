import React from "react";
import "./App.css";


export default function Forecast(){
    return(
        <div className="Forecast">
        <div class="forecastDays">
        <div class="row">
            <div class="col">
        <div class="col-2">
       <div class="days-of-the-week">Mon</div>
            <div class="degree">71/50 
             <img src="https://img.icons8.com/color/48/000000/partly-cloudy-day.png"/>
            </div> 
          </div>
       <div class ="col-2">   
    < div class="days-of-the-week">Tue</div>
    <div class="degree">71/52</div>
  <img src="https://img.icons8.com/color/48/000000/partly-cloudy-day.png"/>
            </div> 
          </div>
    <div class="col-2">
    < div class="days-of-the-week">Wed</div>
    <div class="degree">76/61</div>
     <img src="https://img.icons8.com/color/48/000000/partly-cloudy-day.png"/>
            </div> 
          </div>
<div class="col-2">
<div class="days-of-the-week">Thu</div>
    <div class="degree">71/52</div>
      <img src="https://img.icons8.com/color/48/000000/rain.png"/>
            </div>
          </div>
<div class="col-2">
    <div class="days-of-the-week">Fri</div>
    < div class="degree">57/35</div>
   <img src="https://img.icons8.com/color/48/000000/summer--v1.png"/>
</div>
<div class= "col-2">
    <div class="days-of-the-week">Sat</div>
     <div class="degree">56/43</div>
     <img src="https://img.icons8.com/color/48/000000/summer--v1.png"/>
</div>
< div class="col-2">
    <div class="days-of-the-week">Sun</div>
     <div class="degree">67/53</div>
      <img src="https://img.icons8.com/color/48/000000/partly-cloudy-day.png"/>
            </div> 
</div>
  );
}
