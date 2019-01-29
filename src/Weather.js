import React from 'react';


const Weather = (props) => {
  return (
    <div className="containerWeather">
    <div><h1>{props.city}</h1></div>
    <div>
     <p>Temperatura: <strong>{Math.round(props.temperature)} &#176;C</strong></p>
     <p>Wilgotność: <strong>{props.humidity}%</strong></p>
     <p>Ciśnienie: <strong>{props.pressure} hpa</strong></p>
     <p>Wiatr: <strong>{props.windSpeed}m/s</strong></p>
     <p>Państwo: <strong>{props.country}</strong></p>
     <p>Pogoda: <strong>{props.description}</strong></p>
    </div>
     
    
    </div>
  );
}

export default Weather;