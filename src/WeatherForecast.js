import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="col">
          <div className="WeatherForecast-day">
            {forecast[0].condition.time}
          </div>
          <div className="WeatherForecast-icon">
            {" "}
            <WeatherIcon code={forecast[0].condition.icon} size={40} />{" "}
          </div>
          <div className="WeatherForecast-temp">
            <span className="WeatrForecast-temp-max">
              {" "}
              {forecast[0].temperature.maximum}{" "}
            </span>
            <span className="WeatherForecast-temp-min">
              {" "}
              {forecast[0].temperature.maximum}{" "}
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "74a685e33bd3f486faa1o3tac33e021d";
    let longitude = 10;
    let latitude = 11;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
