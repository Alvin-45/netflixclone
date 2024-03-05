import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';


function Acion() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          const searchInput = "Action"; // You can change this to whatever search query you want
          const response = await axios.get(`https://www.omdbapi.com/?apikey=dd3fb3bb&s=${searchInput}`);
          setMovies(response.data.Search);
        };
    
        fetchData();
      }, []);
  return (
    <>
        <div>
        <div className="action">
        <h3>Browse by Action</h3>
        <div className='d-flex justify-content-around '>
          <div className='card-container'>
            {movies.map(movie => (
              <Card key={movie.imdbID} id='card1' >
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
        </div>
      </div>
    </div>
    </>
  )
}

export default Acion