import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ResponcePage from './components/ResponcePage';
import MainContextProvider from './MainContext';

const MainRoutes = () => {
  return (
    <MainContextProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/responce" element={<ResponcePage />} />
      </Routes>
    </MainContextProvider>
  );
};

export default MainRoutes;
