import { RiCelsiusFill } from 'react-icons/ri';
import { FaSun } from 'react-icons/fa';
import axios from 'axios';
import React, { useState } from 'react';

export default function Weather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleChange = () => {
    const api = "5e49becac336ff19f1469f219390a676";
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric&lang=tr`;

    axios(url)
      .then((res) => {
        const data = res.data;
        setWeatherData({
            
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          hissedilen:data.main.feels_like,
          description:data.weather[0].description
        });console.log(res)
      })
      .catch((error) => {
        console.error("Veri alınamadı: ", error);
      });
  }

  return (
    <div>
         <h1><FaSun className='fa-sun'/>Hava Durumu Uygulaması</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleChange(); }}>
        <div className="form">
          <input
            onChange={(e) => setCity(e.target.value)}
            className="inputText"
            type="text"
            placeholder="Şehri Giriniz"
          />
        </div>
        <div className="btnDiv">
          <button type='submit' className="btn">Verileri Getir</button>
        </div>

        <div className="info">
          {weatherData && (
            <div>
              <p id="sehir">{weatherData.city}, {weatherData.country}</p>
              <div className="genelDeger">
                <p id="sicaklik">{weatherData.temperature}</p>
                <RiCelsiusFill className="fa-c" />
              </div>
              <p id="havaDurumu">{weatherData.description}</p>
              <div className="his">
                <p id="hissedilen">Hissedilen : {weatherData.hissedilen}</p>
                <RiCelsiusFill className="fa-circle" />
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
