import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { HomePage } from '../pages/HomePage/HomePage';
import { Header } from './Header/Header';
import { MovieDetailsPage } from '../pages/MovieDetailsPage/MovieDetailsPage';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { MoviesPage } from '../pages/MoviePage/MoviesPage';
import css from './App.module.css';

// const HomePage = lazy(() => import('../pages/HomePage/HomePage.jsx'));
// const MovieDetailsPage = lazy(() =>
//   import('../pages/MovieDetailsPage/MovieDetailsPage.jsx')
// );
// const Cast = lazy(() => import('./Cast/Cast.jsx'));
// const Reviews = lazy(() => import('./Reviews/Reviews.jsx'));
// const MoviesPage = lazy(() => import('../pages/MoviePage/MoviesPage.jsx'));

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
