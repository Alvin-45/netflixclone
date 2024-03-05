import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Videocard from './Videocard'
import Acion from './Acion';
import Horror from './Horror';
import Tvshows from './Tvshows';

function Cards() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const searchInput = "comedy"; // You can change this to whatever search query you want
      const response = await axios.get(`https://www.omdbapi.com/?apikey=dd3fb3bb&s=${searchInput}`);
      setMovies(response.data.Search);
    };

    fetchData();
  }, []);

  return (

   <>
           <Videocard/>
           <Acion/>
           <h3>Browse by Comedy</h3>
        <div className='card-container d-flex justify-content-around '>
          {movies.map(movie => (
            <Card key={movie.imdbID} >
              <Card.Img variant="top" className="card-img" src={movie.Poster} />
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
        <Tvshows/>

        {/* <div className="card-container">
        <div className="card">
          <img src="./images/kunfupanda4.jpg" className="card-img" alt="" />
          <div className="card-body">
            <h2 className="name text-light">Kunfu Panda 4</h2>
            <h6 className="des">
              Animation
            </h6>
            <button class="watchlist-btn">add to watchlist</button>
          </div>
        </div>
        
        </div> */}
      <Horror/>
   </>
  );
}

export default Cards;
