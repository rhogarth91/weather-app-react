import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import ReactAnimatedWeather from "react-animated-weather";

let defaultCity = "London";

export default function Search(props) {
  let [city, setCity] = useState(defaultCity);
  let [input, setInput] = useState(false);
  let [weather, setWeather] = useState({});

  function showTemperature(response) {
    setInput(true);
    setWeather({
      coordinates: response.data.coord,
      city: response.data.name,
      temp: response.data.temperature.current,
      desc: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon_url,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchResult();
  }

  function searchResult() {
    let apiKey = `74a685e33bd3f486faa1o3tac33e021d`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query={query}&key=${apiKey}`;
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
            <WeatherIcon code="01d" size={40} />
          </li>
        </ul>
      </div>
    );
  } else {
    searchResult(defaultCity);
    return " Loading....";
  }
}
