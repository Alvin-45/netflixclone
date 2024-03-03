import React from 'react'
import st1logo from '../assets/st1name.png'
function Landingpage() {
  return (
    <div className='text-light'>
        <div className="banner">
            <div className="filmdata">
                <img src={st1logo} alt="" />
                <h1 className="text-light">Stranger Things</h1>
                <div className='text-light box1'>
                    <p className='ver'>2016 </p><hr />
                    <p className='ver2'>16+ </p><hr />
                    <p className='ver2'>4 Seasons </p>
                    </div>
                <p>When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.</p>
            </div>
            <img className='st1' src="https://upload.wikimedia.org/wikipedia/en/7/78/Stranger_Things_season_4.jpg" alt="" />
            
        </div>
        
        </div>
  )
}

export default Landingpage