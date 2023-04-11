import { useEffect, useState } from 'react';

const API_KEY = '996f90502411052111a97ebd41f1eb4e';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {movies.map(movie => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
