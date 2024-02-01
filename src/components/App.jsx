import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage/HomePage';
import { Header } from './Header/Header';
import { MovieDetailsPage } from '../pages/MovieDetailsPage/MovieDetailsPage';
import { MovieCast } from './MovieCast/MovieCast';
// import { MovieReviews } from '../pages/MovieReviews';
// import { MoviePage } from '../pages/MoviePage';
import css from './App.module.css';

// import axios from 'axios';

export const App = () => {
  return (
    <div className={css.container}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />}>
          <Route path="moviecast" element={<MovieCast />} />
          {/* <Route path="moviereviews" element={<MovieReviews />} /> */}
        </Route>
        {/* <Route path="/movies" element={<MoviePage />} /> */}
      </Routes>
    </div>
  );
};
