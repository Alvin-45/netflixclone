import React from 'react'
import st1logo from '../assets/st1name.png'
import Anime from './Anime'

function Tv() {
  return (
    <>
     <div className='lpage text-light'>
        <div className="banner d-flex justify-content-around">
            <div className="filmdata">
                <img src={st1logo} alt="" />
                <h1 className="text-light mdesc">Stranger Things</h1>
                <div className='text-light box1'>
                    <p className='ver'>2016 </p><hr />
                    <p className='ver2'>16+ </p><hr />
                    <p className='ver3'>4 Seasons </p>
                    </div>
                <p  className='mdesc'>When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.</p>
                <button className="btn bg-danger text-light fw-bolder m-3 p-2 " id='wtchbtn'><i className="fa-solid fa-play" style={{color: "#ffffff"}}></i> Start Watching</button>
                <button className="btn btn-outline-light fw-bolder m-3 p-2">Play trailer</button>
            </div>
            <img className='st1' src="https://assets-prd.ignimgs.com/2022/05/12/stranger-things-4-poster-1652364986162.jpeg" alt="" />
            
        </div>
        
        </div>
        <Anime/>

    </>
  )
}

export default Tv