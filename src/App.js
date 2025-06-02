import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import MovieDetails from './components/MovieDetails'; // New
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
       title: 'Inception',
  description: 'A thief who steals corporate secrets through dream-sharing technology.',
  posterURL: 'https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SL1500_.jpg',
  rating: 9,
  trailer: 'https://www.youtube.com/embed/YoHD9XEInc0'
      
    },
    {
      title: 'The Dark Knight',
    description: 'Batman faces the Joker, a criminal mastermind who wants to see Gotham descend into anarchy.',
    posterURL: 'https://m.media-amazon.com/images/I/51EbJjlLg4L._AC_.jpg',
    rating: 9.1,
    trailer: 'https://www.youtube.com/embed/EXeTwQWrcwY'
    },
    {
      title: 'Interstellar',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    posterURL: 'https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg',
    rating: 8.6,
    trailer: 'https://www.youtube.com/embed/zSWdZVtXT7E'
    },
    {
      title: 'Pulp Fiction',
    description: 'The lives of two mob hitmen, a boxer, and others intertwine in tales of violence and redemption.',
    posterURL: 'https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg',
    rating: 8.9,
    trailer: 'https://www.youtube.com/embed/s7EdQ4FqbhY'
    },
    {
      title: 'Pulp Fiction',
      description: 'The lives of two mob hitmen, a boxer, and others intertwine in tales of violence and redemption.',
      posterURL: 'https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg',
      rating: 8.9
    },
    {
      title: 'Stranger Things',
    description: 'Young friends face strange phenomena as a girl with powers escapes a lab and monsters from another dimension appear.',
    posterURL: 'https://m.media-amazon.com/images/I/71wGCZQkJjL._AC_SL1200_.jpg',
    rating: 8.8,
    trailer: 'https://www.youtube.com/embed/b9EkMc79ZSU'
    },
    {
      title: 'Breaking Bad',
    description: 'A high school chemistry teacher turns to making meth to support his family after a cancer diagnosis.',
    posterURL: 'https://upload.wikimedia.org/wikipedia/en/6/61/Breaking_Bad_title_card.png',
    rating: 9.5,
    trailer: 'https://www.youtube.com/embed/HhesaQXLuRY'
    },
    {
      title: 'Avengers: Endgame',
    description: 'The Avengers unite to reverse Thanos\' destruction and restore balance to the universe.',
    posterURL: 'https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg',
    rating: 8.4,
    trailer: 'https://www.youtube.com/embed/TcMBFSGVi1c'
    }
  ]);

   const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
    movie.rating >= ratingFilter
  );

  const addMovie = (movie) => setMovies([...movies, movie]);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>🎬 My Movie App</h1>
              <Filter setTitleFilter={setTitleFilter} setRatingFilter={setRatingFilter} />
              <AddMovie onAdd={addMovie} />
              <MovieList movies={filteredMovies} />
            </>
          }
        />
        <Route path="/movie/:title" element={<MovieDetails movies={movies} />} />
      </Routes>
    </div>
  );
};

export default App;