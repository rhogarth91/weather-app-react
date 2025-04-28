import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherForecastDay from "./WeatherForecastDay";
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
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">
              <WeatherForecastDay code={forecast[0].condition.time} />{" "}
            </div>
            <div className="WeatherForecast-icon">
              {" "}
              <WeatherIcon code={forecast[0].condition.icon} size={60} />{" "}
            </div>
            <div className="WeatherForecast-temp">
              <span className="WeatherForecast-temp-max">
                {" "}
                {Math.round(forecast[0].temperature.maximum)}{" "}
              </span>
              <span className="WeatherForecast-temp-min">
                {" "}
                {Math.round(forecast[0].temperature.minimum)}{" "}
              </span>
            </div>
          </div>
          <div className="col">
            <div className="WeatherForecast-day">
              <WeatherForecastDay code={forecast[1].condition.time} />{" "}
            </div>
            <div className="WeatherForecast-icon">
              {" "}
              <WeatherIcon code={forecast[1].condition.icon} size={60} />{" "}
            </div>
            <div className="WeatherForecast-temp">
              <span className="WeatherForecast-temp-max">
                {" "}
                {Math.round(forecast[1].temperature.maximum)}{" "}
              </span>
              <span className="WeatherForecast-temp-min">
                {" "}
                {Math.round(forecast[1].temperature.minimum)}{" "}
              </span>
            </div>
          </div>
          <div className="col">
            <div className="WeatherForecast-day">
              <WeatherForecastDay code={forecast[2].condition.time} />{" "}
            </div>
            <div className="WeatherForecast-icon">
              {" "}
              <WeatherIcon code={forecast[2].condition.icon} size={60} />{" "}
            </div>
            <div className="WeatherForecast-temp">
              <span className="WeatherForecast-temp-max">
                {" "}
                {Math.round(forecast[2].temperature.maximum)}{" "}
              </span>
              <span className="WeatherForecast-temp-min">
                {" "}
                {Math.round(forecast[2].temperature.minimum)}{" "}
              </span>
            </div>
          </div>
          <div className="col">
            <div className="WeatherForecast-day">
              <WeatherForecastDay code={forecast[3].condition.time} />{" "}
            </div>
            <div className="WeatherForecast-icon">
              {" "}
              <WeatherIcon code={forecast[3].condition.icon} size={60} />{" "}
            </div>
            <div className="WeatherForecast-temp">
              <span className="WeatherForecast-temp-max">
                {" "}
                {Math.round(forecast[3].temperature.maximum)}{" "}
              </span>
              <span className="WeatherForecast-temp-min">
                {" "}
                {Math.round(forecast[3].temperature.minimum)}{" "}
              </span>
            </div>
          </div>
          <div className="col">
            <div className="WeatherForecast-day">
              <WeatherForecastDay code={forecast[4].condition.time} />{" "}
            </div>
            <div className="WeatherForecast-icon">
              {" "}
              <WeatherIcon code={forecast[4].condition.icon} size={60} />{" "}
            </div>
            <div className="WeatherForecast-temp">
              <span className="WeatherForecast-temp-max">
                {" "}
                {Math.round(forecast[4].temperature.maximum)}{" "}
              </span>
              <span className="WeatherForecast-temp-min">
                {" "}
                {Math.round(forecast[4].temperature.minimum)}{" "}
              </span>
            </div>
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
