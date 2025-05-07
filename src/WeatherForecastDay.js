import React from "react";

export default function WeatherForecastDay(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const dayTime = new Date(props.code * 1000);
  const day = dayTime.getDay();
  console.log({ day, dayTime, t: days[day] });
  return <div>{days[day]}</div>;
}
