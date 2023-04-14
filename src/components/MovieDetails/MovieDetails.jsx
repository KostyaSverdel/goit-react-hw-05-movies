import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';

import { getMovieDetails } from '../data/Api';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const data = await getMovieDetails(movieId);
      setMovie(data);
    };
    fetchMovieDetails();
  }, [movieId]);

  const toggleCast = () => setShowCast(!showCast);
  const toggleReviews = () => setShowReviews(!showReviews);

  if (!movie) return <div>Loading...</div>;

  const {
    title,
    overview,
    release_date: releaseDate,
    poster_path: posterPath,
    genres,
    runtime,
    vote_average: voteAverage,
  } = movie;

  return (
    <div>
      <h1>{title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={title} />
      <p>{overview}</p>
      <p>Release date: {releaseDate}</p>
      <p>Genres: {genres.map(genre => genre.name).join(', ')}</p>
      <p>Runtime: {runtime} minutes</p>
      <p>Vote average: {voteAverage}</p>
      <nav>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`} onClick={toggleCast}>
              Cast
            </Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`} onClick={toggleReviews}>
              Reviews
            </Link>
          </li>
        </ul>
      </nav>
      {showCast && <Cast movieId={movieId} />}
      {showReviews && <Reviews movieId={movieId} />}
    </div>
  );
}

MovieDetails.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default MovieDetails;
