import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Hike from '../images/hike.jpg';
import awatch from "../images/watch1.jpg";
import surf from "../images/surf.jpg";
import whale from "../images/whale.jpg";
import cycle from "../images/cycle.jpg";
import kayaking from "../images/kayaking.jpg";
import paragliding from "../images/para.jpg";
import raft from '../images/raft.jpg'
import { useNavigate } from 'react-router-dom';

function SliderPart() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
      const navigate=useNavigate()
    const handleNavigatehome=()=>{
      navigate('/search')
    }
  return (
    <>
        <div className='fullbody3'>

      <Slider {...settings}>
        <div id='t1' className="type">
          <img className='tchange' src={Hike} alt="" style={{ width: '280px', height: '398px', position: 'absolute' }} />
          <div className='cont'>
            <h4>HIKING</h4>
            <p>An Ultimate Luxury <br /> Ireland Journey</p>
          </div>
        </div>
        <div id='t2' className="type">
          <img className='tchange' src={awatch} alt="" style={{ width: '280px', height: '398px', position: 'absolute' }} />
          <div className='cont'>
            <h4>Animal Watching</h4>
            <p>A stunning off beaten Safari <br /> path to China</p>
          </div>
        </div>
        <div id='t3' className="type">
          <img className='tchange' src={surf} alt="" style={{ width: '280px', height: '398px', position: 'absolute' }} />
          <div className='cont'>
            <h4>Surfing</h4>
            <p>Journeying Through <br /> Nelson Mandela's Roots</p>
          </div>
        </div>
        <div id='t4' className="type">
          <img className='tchange' src={kayaking} alt="" style={{ width: '280px', height: '398px', position: 'absolute' }} />
          <div className='cont'>
            <h4>Kayaking</h4>
            <p className='text-align-center'>An Ultimate Luxury <br /> Ireland Journey</p>
          </div>
        </div>
        <div id='t5' className="type">
          <img className='tchange' src={whale} alt="" style={{ width: '280px', height: '398px', position: 'absolute' }} />
          <div className='cont'>
            <h4>WHALE WATCHING</h4>
            <p>Best of Namibia Safari & <br /> Nature journey</p>
          </div>
        </div>
        <div id='t6' className="type">
          <img className='tchange' src={cycle} alt="" style={{ width: '280px', height: '398px', position: 'absolute' }} />
          <div className='cont'>
            <h4>CYCLING</h4>
            <p>The Ultimate Croatian <br /> Epicurean Journey</p>
          </div>
        </div>
        <div id='t7' className="type">
          <img className='tchange' src={paragliding} alt="" style={{ width: '280px', height: '398px', position: 'absolute' }} />
          <div className='cont'>
            <h4>PARAGLIDING</h4>
            <p>The Best Adrenaline Sport in  <br /> Epicurean Journey</p>
          </div>
        </div>
        <div id='t8' className="type">
          <img className='tchange' src={raft} alt="" style={{ width: '280px', height: '398px', position: 'absolute' }} />
          <div className='cont'>
            <h4>RAFTING</h4>
            <p>Thrilling Karnataka Package : <br /> Dandeli, Gokarna</p>
          </div>
        </div>
      </Slider>
    </div>
    </>
  )
}

export default SliderPart