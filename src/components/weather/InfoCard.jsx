import React, { useEffect, useState } from "react";
import styles from "./infocard.module.css";
import WeatherInfo from "./WeatherInfo";
const apiKey = process.env.NEXT_PUBLIC_WEATHER_APIKEY;
const InfoCard = () => {
  const [searchCity, setSearchCity] = useState("nagpur");
  const [weatherDetails, setWeatherDetails] = useState({});
  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&appid=${apiKey}`;
      const res = await fetch(url);
      const data = await res.json();
      const { temp, humidity, pressure } = data.main;
      const { name: cityName } = data;
      const { main: weatherMood } = data.weather[0].main;
      const { sunrise, sunset, country } = data.sys;
      const { speed } = data.wind;

      const customeWeatherInfo = {
        temp,
        humidity,
        pressure,
        cityName,
        weatherMood,
        sunrise,
        sunset,
        country,
        speed,
      };
      setWeatherDetails(customeWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeatherInfo();
  }, []);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Search City"
            className={styles.searchInput}
            value={searchCity}
            onChange={(e) => {
              setSearchCity(e.target.value);
            }}
          />
          <button className={styles.searchBtn} onClick={getWeatherInfo}>
            Search
          </button>
        </div>
        <WeatherInfo weatherInfo={weatherDetails} />
      </div>
    </div>
  );
};

export default InfoCard;
