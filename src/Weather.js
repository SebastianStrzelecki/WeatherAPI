import React from 'react';
import './Weather.css';


const Weather = (props) => {
  return (
    <div className="containerWeather">
    <div><h1>{props.city}</h1></div>
    <div>
     <p>Temperatura: {Math.round(props.temperature)} &#176;C</p>
     <p>Wilgotność: {props.humidity}%</p>
     <p>Ciśnienie: {props.pressure} hpa</p>
     <p>Wiatr: {props.windSpeed}m/s</p>
     <p>Państwo: {props.country}</p>
     <p>Pogoda: {props.description}</p>
    </div>
     
    
    </div>
  );
}

export default Weather;