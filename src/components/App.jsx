import React from 'react';
import {
  Route,
  Routes,
  //Redirect,
} from 'react-router-dom';

import Home from './Home/Home';
//import Movies from './Movies';
//import MovieDetails from './MovieDetails';
//import Cast from './Cast';
//import Reviews from './Reviews';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" component={Home} />
      </Routes>
    </div>
  );
}

export default App;

//<Route exact path="/movies" component={Movies} />
//<Route exact path="/movies/:movieId" component={MovieDetails} />
//<Route exact path="/movies/:movieId/cast" component={Cast} />
//<Route exact path="/movies/:movieId/reviews" component={Reviews} />
//<Redirect to="/" />
