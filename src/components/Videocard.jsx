import React, { useEffect, useState } from 'react'
import disneyv from "../video/disney-vid.mp4"
import disneyimg from '../images/disney.png'
import pixarv from '../video/pixar-vid.mp4'
import pixarimg from "../images/pixar.png"
import marvelv from "../video/marvel-opening.mp4"
import marvelimg from "../images/marvelstudios_logo.png"
import ngv from "../video/national-geographic-vid.mp4"
import ngimg from "../images/national geographic - Copy.png"
import starv from "../video/star-vid.mp4"
import starimg from "../images/starplus.png"
import Horror from './Horror'
import axios from 'axios'
import Acion from './Acion'

function Videocard() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const searchInput = "horror"; // You can change this to whatever search query you want
      const response = await axios.get(`https://www.omdbapi.com/?apikey=dd3fb3bb&s=${searchInput}`);
      setMovies(response.data.Search);
    };

    fetchData();
  }, []);
  return (
    <>
    <div className="video-card-container">
      <div className="video-card" >
          <img src={disneyimg} className="video-card-image" id='d1' alt="" />
          <video src={disneyv} autoPlay muted loop className="card-video"></video>
       
  
      </div>
      <div className="video-card">
          <img src={pixarimg} className="video-card-image img-fluid im3" alt="" />
          <video src={pixarv} muted autoPlay loop className="card-video"></video>
        
      </div>
      <div className="video-card">
          <img src={marvelimg} className="video-card-image" alt="" />
          <video src={marvelv} muted autoPlay loop className="card-video"></video>
      </div>
      <div className="video-card">
          <img src={ngimg} className="video-card-image" alt="" />
          <video src={ngv} muted autoPlay loop className="card-video"></video>
      </div>
      <div className="video-card">
          <img src={starimg} className="video-card-image" alt="" />
          <video
            src={starv}
            muted autoPlay
            loop
            className="card-video"
          ></video>
      </div>
    </div>

    
    </>
  )
}

export default Videocard