import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from 'data/Api';

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const data = await getTrendingMovies();
      setTrendingMovies(data.results);
    };
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending movies</h1>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
