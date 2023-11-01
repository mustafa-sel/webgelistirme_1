import React, { useState } from 'react'
import './home.css'
import {RiCelsiusFill} from 'react-icons/ri'
import {TiWeatherPartlySunny} from 'react-icons/ti'
import {GrFormSearch} from 'react-icons/gr'
import axios from 'axios'

function Home() {
    const [city, setCity]= useState("")
    const [weatherData, setWeatherData]=useState("")
    const anahtar = "5e49becac336ff19f1469f219390a676"
    const url =`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${anahtar}&units=metric&lang=tr`
    const handleChange = (e)=> {
        e.preventDefault()
        setCity(e.target.value)
    }
    async function handleClick(){
        try{
            const response = await axios.get(url)
            console.log(response)
             const data= response.data
             setWeatherData({
                sehir:data.name,
                havaDurumu:data.weather[0].description,
                sicaklik:data.main.temp,
                hissedilen:data.main.feels_like,
                country:data.sys.country,
             })
        }catch(error){
            console.log("Ters Giden Birşeyler var...")
        }
    }
    
    
  return (
    <div className='search_input'>
        <div className='input'>
        <GrFormSearch/><input type="search" placeholder="Şehir giriniz..." onChange={handleChange}></input>
        <div className='btn'>
            <button onClick={handleClick}>Veri Getir</button>
        </div>
        </div>
        {weatherData ?(
        <div className='weather_context'>
                <div className='context'>
                    <div>{weatherData.sehir}</div>
                    <div>{weatherData.country}</div>
                    <div><TiWeatherPartlySunny/>{weatherData.sicaklik}<RiCelsiusFill/></div>
                    <div>{weatherData.hissedilen}</div>
                    <div><RiCelsiusFill/></div>
                    <div>{weatherData.havaDurumu}</div>
                </div>
        </div>
        ) : (
            <p>Veri yükleniyor...</p>
          )}
    </div>
  )
}

export default Home