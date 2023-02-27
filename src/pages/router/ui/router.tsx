import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from 'pages/home';
import { routing } from 'shared/config';

export const Router = () => {
  return (
    <Routes>
      <Route path={routing.MAIN_PAGE} element={<Navigate to={routing.HOME_PAGE} replace />} />
      <Route path={routing.HOME_PAGE} element={<Home />} />
    </Routes>
  );
};
