import axios from 'axios';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

function Categories() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (searchInput) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=dd3fb3bb&s=${searchInput}`);
      setMovies(response.data.Search);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const handleButtonClick = async (searchInput) => {
    await fetchData(searchInput);
  };

  return (
    <div className="fullcategory" id='catpage'>
        <h5 className='text-secondary text-center'>Select Category/Genres</h5>
      <div className="btn1 d-flex justify-content-center align-item-center">
        <button className="btn btn-outline-primary me-3" onClick={() => handleButtonClick('Action')}>Action</button>
        <button className="btn btn-outline-primary me-3" onClick={() => handleButtonClick('Comedy')}>Comedy</button>
        <button className="btn btn-outline-primary me-3" onClick={() => handleButtonClick('Fiction')}>Fiction</button>
        <button className="btn btn-outline-primary me-3" onClick={() => handleButtonClick('Sci-Fi')}>Sci-Fi</button>
        <button className="btn btn-outline-primary me-3" onClick={() => handleButtonClick('Romance')}>Romance</button>
      </div>
      <div className="result d-flex justify-content-between card-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          movies.map(movie => (
            <Card id='card1' key={movie.imdbID}>
              <Card.Img variant="top" className='card-imgm' src={movie.Poster} />
              <Card.Body>
                <Card.Title id='name'>{movie.Title}</Card.Title>
                <Card.Text>
                  Year: {movie.Year}
                </Card.Text>
              </Card.Body>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}

export default Categories;
