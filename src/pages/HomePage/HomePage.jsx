import { fetchTrend } from '../../components/Api/Api';
import { FilmsList } from '../../components/FilmsList/FilmsList';
// import { BackLink } from '../../components/BackLink/BackLink';
import { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
import css from './HomePage.module.css';

export default function HomePage() {
  const [films, setFilms] = useState([]);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const productName = searchParams.get('name') ?? '';

  // const updateQueryString = name => {
  //   const nextParams = name !== '' ? { name } : {};
  //   setSearchParams(nextParams);
  // };

  useEffect(() => {
    const trendFilms = async () => {
      try {
        const trend = await fetchTrend();
        setFilms(trend.results);
      } catch (error) {
        console.log(error);
      }
    };
    trendFilms();
  }, []);

  return (
    <main className={css.maine}>
      <FilmsList filmSearch={films} />
    </main>
  );
}
