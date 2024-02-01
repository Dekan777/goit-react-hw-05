import { NavLink, useLocation } from 'react-router-dom';
import css from './MovieDetalilsList.module.css';

export const MovieDetalilsList = ({ detailsSearch }) => {
  const location = useLocation();
  if (!detailsSearch || !Array.isArray(detailsSearch)) {
    return null; // или другая обработка для случая отсутствия данных
  }
  return (
    <ul className={css.container}>
      {detailsSearch.map(
        ({
          id,
          title,
          vote_average,
          backdrop_path,
          original_title,
          overview,
          release_date,
          genres,
          production_companies,
          runtime,
          spoken_languages,
        }) => (
          <li key={id} className={css.movieListItem}>
            <div className={css.movieContainer}>
              <NavLink
                to={`/movies/${id}`}
                state={{ from: location }}
                className={css.movieListLink}
              >
                <img
                  src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                  alt={original_title}
                  className={css.movieListImg}
                  width="200"
                  height="350"
                />
              </NavLink>
              <div className={css.movieListContainer}>
                <p className={css.movieListDesc}>{release_date}</p>
                <p className={css.movieListDesc}>{title}</p>
                <p className={css.movieListDesc}>Rating {vote_average}</p>
                <p className={css.movieListDesc}>{overview}</p>

                <p className={css.movieListDesc}>
                  Genres: {genres.map(genre => genre.name).join(', ')}
                </p>

                <p className={css.movieListDesc}>
                  Production Companies:{' '}
                  {production_companies.map(company => company.name).join(', ')}
                </p>

                <p className={css.movieListDesc}>Runtime: {runtime} minutes</p>

                <p className={css.movieListDesc}>
                  Spoken Languages:{' '}
                  {spoken_languages.map(lang => lang.english_name).join(', ')}
                </p>
              </div>
            </div>
          </li>
        )
      )}
    </ul>
  );
};
