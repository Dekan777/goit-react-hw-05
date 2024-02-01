import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

export const Header = () => {
  return (
    <>
      <ul className={css.header}>
        <li className={css.headerLinkItem}>
          <NavLink to="/" className={css.headerLink}>
            <p className={css.homeCont}>Home</p>
          </NavLink>
        </li>
        <li className={css.headerLinkItem}>
          <NavLink to="/movies" className={css.headerLink}>
            <p className={css.searchCont}>Search Movies</p>
          </NavLink>
        </li>
      </ul>
    </>
  );
};
