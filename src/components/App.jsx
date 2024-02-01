import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage/HomePage';
import { Header } from './Header/Header';
import { MovieDetailsPage } from '../pages/MovieDetailsPage/MovieDetailsPage';
import css from './App.module.css';

// import axios from 'axios';

export const App = () => {
  return (
    <div className={css.container}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
      </Routes>
    </div>
  );
};
