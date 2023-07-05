import React from "react";
import styles from "./infocard.module.css";
const WeatherInfo = ({ weatherInfo }) => {
  const {
    temp,
    humidity,
    pressure,
    cityName,
    weatherMood,
    sunrise,
    sunset,
    country,
    speed,
  } = weatherInfo;
  //convert time
  let startSec = sunrise;
  let time = new Date(startSec * 1000);
  let timeStr = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;

  return (
    <>
      <div>
        <div className={styles.tempBox}>
          <p>
            21 Jun 2023 <span>{timeStr}</span>
          </p>
          <h1 className={styles.temp}>
            {temp} &#8451;
            <span>
              {cityName} {country}
            </span>
          </h1>
        </div>

        <ul className={styles.otherDetails}>
          <li>Sunrise {timeStr}</li>
          <li>Humidity {humidity}%</li>
          <li>Pressure {pressure}</li>
          <li>Wind Speed {speed}</li>
        </ul>
      </div>
    </>
  );
};

export default WeatherInfo;
