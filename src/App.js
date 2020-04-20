import React, { useState, useEffect } from "react";
import defaultBackground from "./test.jpg"
import "./App.css";

function App() {
  const [weather, setWeather] = useState("0");
  const [isWeatherFetched, setIsWeatherFetched] = useState(false);

  const [isDataFetched, setIsDataFetched] = useState(false);
  const [data, setData] = useState(null);
  const [bg, setBg] = useState(defaultBackground);

  const getWeather = () => {
    fetch(
      "http://api.weatherunlocked.com/api/current/59.57,30.19?app_id=d536a447&app_key=77e3b5ed9de2fd82880ec3f20873273d",
      {
        method: "GET",
      }
    )
      .then((response) => {
        if(isWeatherFetched === false) {
        return response.json();}
      })
      .then((data) => {
          setWeather(data);
          setIsWeatherFetched(true);
          // console.log(data);
        

      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getData = () => {
    fetch(
      "https://api.unsplash.com/photos/random?query=petersburg&client_id=aL00eKfv3tjfqyTwbTlRiZyNwqUsLflrnIkY7kWIRao",
      {
        method: "GET",
      }
    )
      .then((response) => {
        if (isDataFetched === false){
          return response.json();
        }
      })
      .then((data) => {
          setData(data);
          setBg(data.urls.regular);
          setBg(data.urls.full);
          setIsDataFetched(true);
          console.log(data);
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getWeather();
    getData();
  }, []);

  return (
    <div className="weather">
      <picture
        className="weather__bg over-blur effect-zoom-out"
        alt="Background image"
      >
        <div className="weather__over"></div>
        <img src={bg} width="100%" heigth="100%" />
      </picture>

      <div className="weather__face">
        <div className="weather__info">
          <div className="weather__temperature">
            <h1 className="effect-magic-in">{weather && weather.temp_c}℃</h1>
          </div>

          <div className="weather__description">
            <h2 className="effect-magic-in">Отличное время</h2>
          </div>

          <div className="weather__city">
            <p className="effect-fade-in">Санкт-Петербург</p>
          </div>
        </div>

        {data && (
          <div className="weather__copyright effect-fade-in">
            <a href={data.user.links.html} target="_blank">
              <small>{data.user.name}</small>
            </a>
          </div>
        )}
      </div>

    </div>
  );
}

export default App;
