import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast() {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = `74a685e33bd3f486faa1o3tac33e021d`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query={query}&key=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
