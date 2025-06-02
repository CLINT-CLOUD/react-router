import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div
      className="movie-card"
      onClick={() => navigate(`/movie/${encodeURIComponent(movie.title)}`)}
      style={{ cursor: 'pointer' }}
    >
      <img src={movie.posterURL} alt={movie.title} className="poster" />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>⭐ {movie.rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
