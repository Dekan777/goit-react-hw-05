// import css from './MovieDetailsPage.module.css';

import { fetchDetails } from '../../components/Api/Api';
import { MovieDetalilsList } from '../../components/MovieDetalilsList/MovieDetalilsList';
import { BackLink } from '../../components/BackLink/BackLink';
import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';

export const MovieDetailsPage = () => {
  const { id } = useParams();
  //   console.log('IIIIDDDDDD', id);
  const [detalies, setDetalies] = useState({});
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        if (id) {
          const trend = await fetchDetails(id);
          //   console.log('trend', trend);
          setDetalies(trend);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieDetails();
  }, [id]);

  return (
    <main>
      <BackLink to={backLinkHref}>Back to Home</BackLink>
      {Object.keys(detalies).length > 0 ? (
        <MovieDetalilsList detailsSearch={detalies} />
      ) : (
        <p>Loading...</p>
      )}
      <li>
        <Link to="moviecast">Cast</Link>
      </li>
      <li>
        <Link to="moviereviews">Reviews</Link>
      </li>
      <Outlet />
    </main>
  );
};
