import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

export const Header = () => {
  return (
    <>
      <ul className={css.header}>
        <li className={css.headerLinkItem}>
          <NavLink to="/" className={css.headerLink}>
            <h1>Home</h1>
          </NavLink>
        </li>
        <li className={css.headerLinkItem}>
          <NavLink to="/movies" className={css.headerLink}>
            Search Movies
          </NavLink>
        </li>
      </ul>
    </>
  );
};
