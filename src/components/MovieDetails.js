import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
  const { title } = useParams();
  const navigate = useNavigate();
  const movie = movies.find(m => m.title === decodeURIComponent(title));

  if (!movie) return <p>Movie not found</p>;

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <p><strong>Description:</strong> {movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <br /><br />
      <button onClick={() => navigate('/')}>⬅ Back to Home</button>
    </div>
  );
};

export default MovieDetails;
