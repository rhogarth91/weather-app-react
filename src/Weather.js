import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import WeatherForecast from "./WeatherForecast";

let defaultCity = "London";

export default function Search() {
  let [city, setCity] = useState(defaultCity);
  let [input, setInput] = useState(false);
  let [weather, setWeather] = useState({});

  function showTemperature(response) {
    setInput(true);
    setWeather({
      coordinates: response.data.coordinates,
      city: response.data.city,
      temp: response.data.temperature.current,
      desc: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchResult();
  }

  function searchResult() {
    let apiKey = `74a685e33bd3f486faa1o3tac33e021d`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city...."
        onChange={updateCity}
      />
      <button type="Submit">Submit</button>
    </form>
  );

  if (input) {
    return (
      <div>
        <br />
        {form}
        <br />
        <ul class="weatherDisplay">
          <li>
            <b>City:</b> {city}
          </li>
          <li>
            <b>Temperature:</b> {Math.round(weather.temp)}°C
          </li>
          <li>
            <b>Description:</b> {weather.desc}
          </li>
          <li>
            <b>Humidity:</b> {weather.humidity}%
          </li>
          <li>
            <b>Wind:</b> {weather.wind}km/h
          </li>
          <li>
            <WeatherIcon code={weather.icon} size={150} />
          </li>
        </ul>
        <WeatherForecast coordinates={weather.coordinates} />
      </div>
    );
  } else {
    searchResult(defaultCity);
    return " Loading....";
  }
}
