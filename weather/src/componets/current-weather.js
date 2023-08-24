import React from "react";
import "./current-weather.css";

const CurrentWeather = ({data}) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data? data.name:'Name'}</p>
          <p className="weather-description">{data? data.weather[0].description:'Weather'}</p>
        </div>
      </div>
      <div className="bottom">
        <p className="temperature">{data? Math.round(data.main.temp):''}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">{data? data.main.feels_like:''}
              °C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data? data.wind.speed:''} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data? data.main.humidity:''}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data? data.main.pressure:''} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;