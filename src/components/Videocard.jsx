import React from 'react'
import disneyv from "../video/disney-vid.mp4"
import disneyimg from '../images/disney.png'
import pixarv from '../video/pixar-vid.mp4'
import pixarimg from "../images/pixar.png"
import marvelv from "../video/marvel-opening.mp4"
import marvelimg from "../images/marvelstudios_logo.jpg"
import ngv from "../video/national-geographic-vid.mp4"
import ngimg from "../images/national geographic - Copy.png"
import starv from "../video/star-vid.mp4"
import starimg from "../images/starplus.png"

function Videocard() {
  return (
    <>
    <div id="video-card-container">
      <div className="video-card">
          <img src={disneyimg} className="video-card-image" alt="" />
          <video src={disneyv} autoplay muted loop className="card-video"></video>
       
  
      </div>
      <div className="video-card">
          <img src={pixarimg} className="video-card-image img-fluid im3" alt="" />
          <video src={pixarv} muted autoplay loop className="card-video"></video>
        
      </div>
      <div className="video-card">
          <img src={marvelimg} className="video-card-image" alt="" />
          <video src={marvelv} muted autoplay loop className="card-video"></video>
      </div>
      <div className="video-card">
          <img src={ngimg} className="video-card-image" alt="" />
          <video src={ngv} muted autoplay loop className="card-video"></video>
      </div>
      <div className="video-card">
          <img src={starimg} className="video-card-image" alt="" />
          <video
            src={starv}
            muted autoplay
            loop
            className="card-video"
          ></video>
      </div>
    </div>
    </>
  )
}

export default Videocard