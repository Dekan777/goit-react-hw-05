// import css from './MovieDetailsPage.module.css';

import { fetchDetails } from '../../components/Api/Api';
import { FilmsList } from '../../components/MovieDetalilsList/MovieDetalilsList';
import { useEffect, useState } from 'react';

export const MovieDetailsPage = () => {
  const [detalies, setDetalies] = useState([]);
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
      <FilmsList detaliesSearch={detalies} />
    </main>
  );
};
