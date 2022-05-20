import React, { useState } from "react";
import Card from "../Card/Card";
import "./search.css";

const Search = () => {
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const appid = "51f164ad889575bd383456b9c5d665fe";
  const handleChange = (ev) => {
    setLat(ev.target.value);
    
  };
  const handleLong = (ev) => {
    setLong(ev.target.value);
    
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if( lat == null || long == null){
      alert("Please fill the form");
      return;
    }
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${appid}`)
    .then(resp => {
      if( !resp.ok) throw new Error(resp.statusText)
      return resp.json();
    })
    .then( data => {
      console.log(data)
    })
    .catch(console.error())
  }

  return (
    <div className="container">
      <form action="">
        <input
          type="number"
          className="search-input"
          autoFocus
          onChange={(e) => {
            handleChange(e);
          }}
          value={lat}
          placeholder="Lattitude"
        />
        <input
          type="number"
          className="search-input"
          autoFocus
          onChange={(e) => {
            handleLong(e);
          }}
          value={long}
          placeholder="Longtiude"
        />

        <button onClick={(e) => {handleSubmit(e)}}> Submit </button>
      </form>
      <Card />
    </div>
  );
};

export default Search;
