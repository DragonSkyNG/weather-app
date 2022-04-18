import classes from "./WeatherItem.module.scss";

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const WeatherItem = (props) => {
  if (props.currKey) {
    return (
      <div className={classes.weatheritem}>
        <img src={props.dayData.condition.icon} alt="weather icon" />
        <h4>Current Weather</h4>
        <p>Condition: {props.dayData.condition.text}</p>
        <p>Temp: {props.dayData.temp_c}°C</p>
        <p>Feels like: {props.dayData.feelslike_c}°C</p>
        <p>Wind: {props.dayData.wind_kph} kph</p>
        <p>Humidity: {props.dayData.humidity}</p>
      </div>
    );
  }
  const date = new Date(props.date);
  const day = date.getDay();
  return (
    <div className={classes.weatheritem}>
      <img src={props.dayData.condition.icon} alt="weahter icon" />
      <h4>{weekdays[day]}</h4>
      <p>Date: {props.date}</p>
      <p>Condition: {props.dayData.condition.text}</p>
      <p>Max temp: {props.dayData.maxtemp_c}°C</p>
      <p>Avg temp: {props.dayData.avgtemp_c}°C</p>
      <p>Min temp: {props.dayData.mintemp_c}°C</p>
    </div>
  );
};

export default WeatherItem;
