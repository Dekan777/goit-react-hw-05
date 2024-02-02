import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage/HomePage';
import { Header } from './Header/Header';
import { MovieDetailsPage } from '../pages/MovieDetailsPage/MovieDetailsPage';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { MoviesPage } from '../pages/MoviePage/MoviesPage';
import css from './App.module.css';

// import axios from 'axios';

export const App = () => {
  return (
    <div className={css.container}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </div>
  );
};
