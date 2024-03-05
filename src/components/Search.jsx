import axios from 'axios';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

function Search() {
  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchInput.trim() !== "") {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=dd3fb3bb&s=${searchInput}&type=series`);
      setMovies(response.data.Search);
    }
  };

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className='fullbodySearch text-center'>
      <form onSubmit={handleSearch}>
        <input type="text" className='tbox me-2' placeholder='Enter Film name/Genre' onChange={handleInputChange} />
        <button type="submit" className='btn btn-outline-success'>Search</button>
      </form>
      <hr />
      <div className="result">
        <h3 className="text-light text-start">Recommended Series</h3>
        <div className='card-container d-flex justify-content-around '>
          {movies && movies.map(movie => (
            <Card key={movie.imdbID} className='cd'>
              <Card.Img variant="top" className="card-img" src={movie.Poster} />
              <Card.Body>
                <h2 className="name text-light">{movie.Title}</h2>
                <h6 className="des">{movie.Type}</h6>
                <button className="watchlist-btn">add to watchlist</button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
