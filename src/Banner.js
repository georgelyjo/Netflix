import React, { useEffect, useState } from 'react';
import { API_KEY, imageUrl } from './constant';
import axios from './axios';
import './style.css';

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(`/trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then(response => {
        console.log(response.data.results[0]);
        var i = Math.floor(Math.random() * 18);
        setMovie(response.data.results[i++]);
      });
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url( ${movie ? imageUrl + movie.backdrop_path : ''})`
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title"><b>{movie ? movie.title : ''}</b></h1>
        <div className="banner_button">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description"><b>{movie ? movie.overview : ''}</b></h1>
      </div>
      <div className="fade_bottom" />
    </div>
  );
}
export default Banner;
