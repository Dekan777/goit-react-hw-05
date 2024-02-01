// import css from './MovieDetailsPage.module.css';

import { fetchDetails } from '../../components/Api/Api';
import { MovieDetalilsList } from '../../components/MovieDetalilsList/MovieDetalilsList';
import { BackLink } from '../../components/BackLink/BackLink';
import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

export const MovieDetailsPage = () => {
  const { id } = useParams();

  const [detalies, setDetalies] = useState([]);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  console.log(detalies);

  useEffect(() => {
    const trendFilms = async () => {
      try {
        const trend = await fetchDetails();
        setDetalies(trend.results);
      } catch (error) {
        console.log(error);
      }
    };
    trendFilms();
  }, []);
  return (
    <main>
      <BackLink to={backLinkHref}>Back to products</BackLink>
      <MovieDetalilsList detaliesSearch={detalies} />
    </main>
  );
};
