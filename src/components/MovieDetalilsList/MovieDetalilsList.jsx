import { NavLink, useLocation } from 'react-router-dom';
import css from './MovieDetalilsList.module.css';

export const FilmsList = ({ detaliesSearch }) => {
  const location = useLocation();

  return (
    <ul className={css.container}>
      {detaliesSearch.map(
        ({
          id,
          title,
          vote_average,
          poster_path,
          original_title,
          overview,
          release_date,
          genres,
          production_companies,
          runtime,
          spoken_languages,
        }) => (
          <li key={id} className={css.movieListItem}>
            <div className={css.movieConteiner}>
              {/* Update the link to use the new movie id */}
              <NavLink
                to={`/movies/${id}`}
                state={{ from: location }}
                className={css.movieListLink}
              >
                {/* Update the image source to use backdrop_path */}
                <img
                  src={`https://image.tmdb.org/t/p/original${poster_path}`}
                  alt={original_title}
                  className={css.movieListImg}
                  width="200"
                  height="350"
                />
              </NavLink>
              <div className={css.movieListConteiner}>
                {/* Display additional movie details */}
                <p className={css.movieListDesc}>{release_date}</p>
                <p className={css.movieListDesc}>{title}</p>
                <p className={css.movieListDesc}>Rating {vote_average}</p>
                <p className={css.movieListDesc}>{overview}</p>

                {/* Display genres */}
                <p className={css.movieListDesc}>
                  Genres: {genres.map(genre => genre.name).join(', ')}
                </p>

                {/* Display production companies */}
                <p className={css.movieListDesc}>
                  Production Companies:{' '}
                  {production_companies.map(company => company.name).join(', ')}
                </p>

                {/* Display runtime */}
                <p className={css.movieListDesc}>Runtime: {runtime} minutes</p>

                {/* Display spoken languages */}
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
