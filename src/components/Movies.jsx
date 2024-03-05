import React from 'react'
import movlogo from '../img1/image 1.png'
import movban from '../img1/Movie Wallpaper.png'

import Cards from './Cards'
import Mrecommended from './Mrecommended'
function Movies() {
  return (
    <>
    <div className='text-light'style={{marginTop:'50px'}}>
    <div id='banner2' className="d-flex justify-content-around">
            <div className="filmdata">
                <img className='b2img' src={movlogo} alt="" />
                
                
                <p  className='mdesc mt-5'>Ved and Tara fall in love while on a holiday in Corsica and decide to keep their real identities undisclosed. Tara returns to Delhi and meets a new Ved, who is trying to discover his true self.</p>
                <h5 className="text-danger mdesc fw-bolder">GENRES</h5>
                <p className="text-light fw-bolder">Romance, Drama</p>
                <button className="btn bg-danger text-light fw-bolder m-3 p-2 " id='wtchbtn'><i className="fa-solid fa-play" style={{color: "#ffffff"}}></i> Start Watching</button>
                <button className="btn btn-outline-light fw-bolder m-3 p-2">Play trailer</button>
            </div>
            <img className='st1' src={movban} alt="" />
            
        </div>
        
        </div>
        <Mrecommended/>
        </>
  )
}

export default Movies