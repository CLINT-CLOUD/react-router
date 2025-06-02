import React, { useState } from 'react';

const AddMovie = ({ onAdd }) => {
  const [movie, setMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: ''
  });

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!movie.title || !movie.posterURL || !movie.rating) return;
    onAdd({ ...movie, rating: Number(movie.rating) });
    setMovie({ title: '', description: '', posterURL: '', rating: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="add-movie-form">
      <input name="title" placeholder="Title" onChange={handleChange} value={movie.title} />
      <input name="description" placeholder="Description" onChange={handleChange} value={movie.description} />
      <input name="posterURL" placeholder="Poster URL" onChange={handleChange} value={movie.posterURL} />
      <input name="rating" type="number" placeholder="Rating" onChange={handleChange} value={movie.rating} />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
