import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Application</h1>
        <Weather />
      </header>

      <footer className="App-Footer">
        <p>
          This project was coded by
          <a
            href="https://github.com/rhogarth91"
            target="_blank"
            rel="noreferrer"
          >
            Rose H{" "}
          </a>{" "}
          🌹 and is
          <a
            href="https://github.com/rhogarth91/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub{" "}
          </a>
          and{" "}
          <a
            href="https://rh-weather-app-react.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            hosted on Netlify">
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
