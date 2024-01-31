import { NavLink, useLocation } from 'react-router-dom';
import css from './FilmsList.module.css';

export const FilmsList = ({ filmSearch }) => {
  const location = useLocation();

  return (
    <ul className={css.container}>
      {filmSearch.map(
        ({
          id,
          title,
          vote_average,
          poster_path,
          original_title,
          overview,
          release_date,
        }) => (
          <li key={id} className={css.movieListItem}>
            <div className={css.movieConteiner}>
              <NavLink
                to={`/movies/${id}`}
                state={{ from: location }}
                className={css.movieListLink}
              >
                <img
                  src={`https://image.tmdb.org/t/p/original${poster_path}`}
                  alt={original_title}
                  className={css.movieListImg}
                  width="200"
                  height="350"
                />
              </NavLink>
              <div className={css.movieListConteiner}>
                <p className={css.movieListDesc}>{release_date}</p>
                <p className={css.movieListDesc}>{title}</p>
                <p className={css.movieListDesc}>Rating {vote_average}</p>
                <p className={css.movieListDesc}>{overview}</p>
              </div>
            </div>
          </li>
        )
      )}
    </ul>
  );
};
