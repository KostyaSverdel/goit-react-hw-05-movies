import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { searchMovies } from 'data/Api';

function Movies() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('query');
    if (query) {
      setSearchQuery(query);
      fetchSearchResults(query);
    }
  }, [location.search]);

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

  const fetchSearchResults = async query => {
    try {
      const { results } = await searchMovies(query);
      if (results.length === 0) {
        setError(`No results found for '${query}'`);
      } else {
        setError('');
        setSearchResults(results);
        setSearchQuery(query);
        const params = new URLSearchParams({ query });
        window.history.replaceState(null, '', `?${params.toString()}`);
      }
    } catch (error) {
      console.error(error);
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div>
      <h1>Search for Movies</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInput}
          placeholder="Search for a movie"
        />
        <button type="submit">Search</button>
        {error && <p>{error}</p>}
      </form>
      <ul>
        {searchResults.map(movie => (
          <li key={movie.id}>
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
                search: `?query=${searchQuery}`,
              }}
              state={location}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

Movies.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Movies;
