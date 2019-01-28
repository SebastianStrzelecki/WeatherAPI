import React from 'react';



const Weather = (props) => {
  return (
    <div className="containerWeather">
    <div><h1>{props.city}</h1></div>
    <div>
     <p>Temperature: {Math.round(props.temperature*100)/100}</p>
     <p>Humidity: {props.humidity}</p>
     <p>Country: {props.country}</p>
     <p>Description: {props.description}</p>
    </div>
     
    
    </div>
  );
}

export default Weather;