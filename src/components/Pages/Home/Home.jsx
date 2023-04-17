import React, { useState, useEffect, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from 'data/Api';
import css from '../Home/Home.module.css';

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
    <div className={css.homePage}>
      <h1 className={css.TitlePage}>Trending movies</h1>
      <ul className={css.listPage}>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Suspense>
              <Link className={css.titleMovies} to={`/movies/${movie.id}`}>
                {movie.title}
              </Link>
            </Suspense>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
