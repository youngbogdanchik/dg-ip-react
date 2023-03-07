import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/home';
import { paths } from 'shared/config';

export const Routing = () => {
  return (
    <Routes>
      <Route path={paths.root} element={<Navigate to={paths.home.root} replace />} />
      <Route path={paths.home.root} element={<HomePage />} />
    </Routes>
  );
};
