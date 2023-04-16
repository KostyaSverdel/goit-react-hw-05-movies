import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="nav-bar">
      <ul className="ul-nav-bar">
        <li>
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
