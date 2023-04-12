import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Home from './Home/Home';
import Movies from './Movies/Movies';
import MovieDetails from './MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/movies/:movieId" component={MovieDetails} />
        <Route exact path="/movies/:movieId/cast" component={Cast} />
        <Route exact path="/movies/:movieId/reviews" component={Reviews} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
