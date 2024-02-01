import { NavLink, useLocation } from 'react-router-dom';
import css from './MovieDetalilsList.module.css';

// import css from './MovieDetalilsList.module.css';

export const MovieDetalilsList = ({ detailsSearch }) => {
  const location = useLocation();
  if (!detailsSearch) {
    return <p>Error: Movie details not available.</p>;
  }
  const {
    title,
    poster_path,
    overview,
    release_date,
    genres,
    homepage,
    vote_average,
    vote_count,
  } = detailsSearch;

  return (
    <div className={css.movieDetailsContainer}>
      <img
        className={css.poster}
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={`${title} Poster`}
      />
      <div className={css.details}>
        <h2>{title}</h2>
        <p>{overview}</p>
        <p>
          <strong>Release Date:</strong> {release_date}
        </p>
        <p>
          <strong>Genres:</strong>{' '}
          {genres.map(genre => (
            <span key={genre.id}>{genre.name}, </span>
          ))}
        </p>
        <p>
          <strong>Homepage:</strong>{' '}
          <a href={homepage} target="_blank" rel="noopener noreferrer">
            {homepage}
          </a>
        </p>
        <p>
          <strong>Vote Average:</strong> {vote_average} ({vote_count} votes)
        </p>
        <NavLink
          to={{
            pathname: `/custom-path/${detailsSearch.id}`, // Replace with your desired path
            state: { from: location.pathname },
          }}
        >
          View Details
        </NavLink>
      </div>
    </div>
  );
};
