import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState("");
  let [input, setInput] = useState(false);
  let [weather, setWeather] = useState({});

  function showTemperature(response) {
    setInput(true);
    setWeather({
      temp: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      desc: response.data.condition.description,
      icon: response.data.condition.icon_url,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let key = `74a685e33bd3f486faa1o3tac33e021d`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&unit=metric`;
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
            <img src="#" alt={weather.icon} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
