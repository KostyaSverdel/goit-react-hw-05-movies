import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getMovieReviews } from 'data/Api';

function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const data = await getMovieReviews(movieId);
      setReviews(data.results);
    };
    fetchReviews();
  }, [movieId]);

  return (
    <div>
      <h2>Reviews:</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
}

Reviews.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default Reviews;
