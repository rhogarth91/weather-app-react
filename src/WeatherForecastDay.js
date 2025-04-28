import React from "react";

export default function WeatherForecastDay() {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div>
      {days.map(function (days, index) {
        return <div key={index}>{days}</div>;
      })}
    </div>
  );
}
