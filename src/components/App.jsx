import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { Header } from './Header/Header';
import css from './App.module.css';

// import axios from 'axios';

export const App = () => {
  return (
    <div className={css.container}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};
