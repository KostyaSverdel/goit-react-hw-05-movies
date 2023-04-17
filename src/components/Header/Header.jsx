import { NavLink } from 'react-router-dom';
import css from '../Header/Header.module.css';

export const Header = () => {
  return (
    <div className={css.navBar}>
      <ul className={css.ulNavBar}>
        <li>
          <NavLink className={css.navLink} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={css.navLink} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
