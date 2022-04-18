import { Fragment, useEffect, useState } from "react";
import WeatherItem from "./WeatherItem";
import classes from "./Weather.module.scss";

const Weather = () => {
  const [weatherForecast, setWeatherForecast] = useState({});

  const url = "http://api.weatherapi.com/v1/";

  const getWeatherForecast = async () => {
    const response = await fetch(
      url +
        "forecast.json?key=" +
        process.env.REACT_APP_WEATHER_API_KEY +
        "&q=Riga&days=3"
    );
    const jsonData = await response.json();
    setWeatherForecast(jsonData);
  };

  useEffect(() => {
    getWeatherForecast();
  }, []);
  let weatherItems;
  const wfNotEmpty = Object.keys(weatherForecast).length;
  if (wfNotEmpty)
    weatherItems = weatherForecast.forecast.forecastday.map((item) => (
      <WeatherItem
        key={item.date_epoch}
        date={item.date}
        dayData={item.day}
        currKey={false}
      />
    ));
  // const currentWeather = weatherForecast.current;

  return (
    <Fragment>
      <h1 className={classes.heading}>Weather forecast</h1>
      <div className={classes.weather}>
        {Object.keys(weatherForecast).length && (
          <WeatherItem
            key={1}
            dayData={weatherForecast.current}
            currKey={true}
          />
        )}
        {weatherItems}
      </div>
    </Fragment>
  );
};

export default Weather;
