import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Videocard from './Videocard'

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
           <h3>Browse by Comedy</h3>
        {/* <div className='d-flex flex-wrap justify-content-around '>
          {movies.map(movie => (
            <Card key={movie.imdbID} style={{ width: '18rem', margin: '10px' }}>
              <Card.Img variant="top" src={movie.Poster} />
              <Card.Body>
                <h2 className="name text-light">Kunfu Panda 4</h2>
            <h6 className="des">
              Animation
            </h6>
            <button className="watchlist-btn">add to watchlist</button>
              </Card.Body>
            </Card>
          ))}
        </div> */}
        <div class="card-container">
        <div class="card">
          <img src="./images/kunfupanda4.jpg" class="card-img" alt="" />
          <div class="card-body">
            <h2 class="name text-light">Kunfu Panda 4</h2>
            <h6 class="des">
              Animation
            </h6>
            <button class="watchlist-btn">add to watchlist</button>
          </div>
        </div>
        
        </div>
      
   </>
  );
}

export default Cards;
