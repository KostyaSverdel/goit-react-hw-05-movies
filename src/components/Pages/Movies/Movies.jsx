import React, { useState, useEffect, useCallback, Suspense } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { searchMovies } from 'data/Api';
import css from '../Movies/Movies.module.css';

function Movies() {
  const location = useLocation();
  const [params, setParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(params.get('query') || '');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');

  const fetchSearchResults = useCallback(
    async query => {
      try {
        const { results } = await searchMovies(query);
        const isSearchSuccessful = results.length > 0;
        setSearchResults(results);
        setParams({ query });
        setError(isSearchSuccessful ? '' : `No results found for '${query}'`);
      } catch (error) {
        console.error(error);
        setError('Something went wrong. Please try again later.');
      }
    },
    [setParams]
  );

  useEffect(() => {
    const query = params.get('query') || '';
    setSearchQuery(query);
    fetchSearchResults(query);
  }, [params, fetchSearchResults]);

  const handleSearchInput = e => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      setError('Please enter a search query');
      return;
    }
    fetchSearchResults(searchQuery);
  };

  return (
    <div className={css.SearchMoviesPage}>
      <h1 className={css.SearchMoviesTitle}>Search for Movies</h1>
      <form className={css.SearchMoviesForm} onSubmit={handleSubmit}>
        <input
          className={css.SearchMoviesInputForm}
          type="text"
          value={searchQuery}
          onChange={handleSearchInput}
          placeholder="Search for a movie"
        />
        <button className={css.SearchMoviesButton} type="submit">
          Search
        </button>
        {searchResults.length === 0 && error && <p>{error}</p>}
      </form>
      <ul className={css.SearchMoviesResults}>
        {searchResults.map(movie => (
          <li key={movie.id}>
            <div>
              <Suspense>
                {handleSearchInput ? (
                  <Link
                    className={css.SearchMoviesResultsLink}
                    to={`${movie.id}`}
                    state={{ from: location }}
                  >
                    {movie.title}
                  </Link>
                ) : (
                  <h2>{movie.title}</h2>
                )}
              </Suspense>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
