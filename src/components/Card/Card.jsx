import React from 'react'
import './card.css'

const Card = ({city, country_code, data}) => {
    // const [city, country_code] = props;
console.log(data)
  return (
    <div className="card">
        
        <div className="top">
            <h4 className="city">{city}, {country_code}</h4>
            <p className="city-detail">{data.current.weather[0].description}</p>
        </div>

        <div className="mid">
            <div className="mid-left">
                <h1 className="degree">{data.current.temp}&deg; </h1>
                <p className="desc">Feels like {data.current.feels_like}&deg;</p>
            </div>

            <img src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@4x.png`} alt="" className="weather-icon" />
        </div>

        <div className="wind">
            <img src="https://cdn-icons-png.flaticon.com/512/172/172922.png" alt="" className="wind-icon" />
            {data.current.wind_speed} m/s wind
            <img src="https://cdn-icons-png.flaticon.com/512/728/728093.png" alt="" className="humidity-icon" />  
            {data.current.humidity}% humidity
        </div>
    </div>
  )
}

export default Card