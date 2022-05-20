import React, { useState } from "react";
import Card from "../Card/Card";
import "./search.css";

const Sear = () => {
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [search, setSearch] = useState("");
  const appid = "51f164ad889575bd383456b9c5d665fe";
  let [city, setCity] = useState("set Citiy");
  let [country_code, setCountry] = useState("set Country");
  let [ weatherData, setData] = useState({
      current: {
          weather: [
              {
                  id: 800,
                  description: "--",
                  icon: "01d"
              }
          ],
          humidity: 0,
          temp: 0,
          feels_like: 0,
          wind_speed: 0,

      }
  })
  
  const handleSearch = (ev) => {
      setSearch(ev.target.value);
      fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${search}&appid=${appid}`)
      .then(resp => {
        if( !resp.ok) throw new Error(resp.statusText)
        return resp.json();
      })
      .then( data => {
        setLong(parseFloat(data[0].lon))
        setLat(parseFloat(data[0].lat))
        setCity(data[0].name);
        setCountry(data[0].country)
        // console.log(lat, long)
        fet(lat, long)
      })
      .catch(console.error())
  }
  const metric = "metric"

  const fet = (la, lo) => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${la}&lon=${lo}&appid=${appid}&units=${metric}`)
    .then(resp => {
      if( !resp.ok) throw new Error(resp.statusText)
      return resp.json();
    })
    .then( data => {
      setData(data)
    })
    .catch(console.error())
  }

  return (
    <div className="container">
      <form action="">
        <input
          type="text"
          className="search-input"
          autoFocus
          onChange={(e) => {
            handleSearch(e);
          }}
          value={search}
          placeholder="City"
        />
      </form>
      <Card city={city} country_code={country_code} data={weatherData}/>
    </div>
  );
};

export default Sear;
