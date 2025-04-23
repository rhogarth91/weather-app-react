import React from "react";
import WeatherIcon from "./WeatherIcon";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="col">
        <div className="WeatherForecast-day">Thu</div>
        <div className="WeatherForecast-icon">
          <WeatherIcon code="01d" />{" "}
        </div>
        <div className="WeatherForecast-temp">
          <span className="WeatherForecast-temp-max"> 19 </span>
          <span className="WeatherForecast-temp-min"> 19 </span> 10
        </div>
      </div>
    </div>
  );
}
