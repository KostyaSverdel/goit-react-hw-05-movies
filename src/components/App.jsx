import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Movies from './Pages/Movies/Movies';
import MovieDetails from './MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import Layout from './Layout/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
