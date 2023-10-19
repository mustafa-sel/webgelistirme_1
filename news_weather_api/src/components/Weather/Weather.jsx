import React, { useEffect, useState } from "react";
import "./weather.css";
import axios from "axios";
import { RiCelsiusFill } from "react-icons/ri";

function Weather() {
  const [countries, setCountries] = useState([]);
  const key = "5e49becac336ff19f1469f219390a676";
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [showCountries, setShowCountries] = useState(false);
 
  async function handleClick() {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=tr`
      );
      const data = response.data;
      setWeatherData({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        havaDurumu: data.weather[0].description,
        hissedilen: data.main.feels_like,
      });
      
      setShowCountries(true)
      // console.log(response);
    } catch (error) {
      // console.error(error);
    }
  }
 
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((veriable) => veriable.json())
      .then((veriable) => setCountries(veriable));
  }, []);
  // console.log(countries);

  return (
    <div>
      <div className="weather_header"><h1>CANLI HAVA DURUMU</h1></div>
      <div className="weather_input"><input
        type="text"
        placeholder="Şehir giriniz..."
        onChange={(e) => setCity(e.target.value)}
      /></div>
      <div className="weather_button">
        <button onClick={handleClick}>Verileri getir</button>
      </div>
      
      <div className="info">
        {weatherData ? (
          <div>
            <p id="sehir">
              {weatherData.city}, {weatherData.country}
            </p>
            <div className="genelDeger">
              <p id="sicaklik">{weatherData.temperature}</p>
              <RiCelsiusFill className="fa-c" />
            </div>
            <p id="havaDurumu">{weatherData.havaDurumu}</p>
            <div className="his">
              <p id="hissedilen">Hissedilen : {weatherData.hissedilen} </p>
              <RiCelsiusFill className="fa-circle" />
              
            </div>
          </div>
        ) : (
          <p>Bilgi yükleniyor...</p>
        )}
      </div>
      <div className="ulkeler_card" style={{ display: showCountries ? "block" : "none" }}>
        {countries.map((ulke, anahtar) => (
          <div key={anahtar} className="countries">
            <h3>Ülke: {ulke.name.common}</h3>
            <h3>Başkent: {ulke.capital}</h3>
            <h3>
              <img src={ulke.flags.png} alt="" style={{ width: "25px" }} />
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Weather;
