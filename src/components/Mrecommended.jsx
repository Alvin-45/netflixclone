import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import Bollclassic from './Bollclassic';

function Mrecommended() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          const searchInput = "movie"; // You can change this to whatever search query you want
          const response = await axios.get(`https://www.omdbapi.com/?apikey=dd3fb3bb&s=${searchInput}`);
          setMovies(response.data.Search);
        };
    
        fetchData();
      }, []);
  return (
    <>
    <div>
        <div className="action">
        <h3 className='text-light'>RECOMMENDED FOR YOU</h3>
        <div className=' d-flex justify-content-around '>
          <div className='card-container '>
            {movies.map(movie => (
              <Card id='cardm' key={movie.imdbID} className='cd' >
                <Card.Img variant="top" className="card-imgm" src={movie.Poster} />
                <Card.Body>
                  <h2 className="name text-light">{movie.Title}</h2>
              <h6 className="des">
                {movie.Type}
              </h6>
              <button className="watchlist-btn">add to watchlist</button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Bollclassic/>
    </>
  )
}

export default Mrecommended