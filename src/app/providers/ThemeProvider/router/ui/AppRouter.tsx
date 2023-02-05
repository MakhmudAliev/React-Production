import { Suspense } from 'react';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { Routes, Route } from 'react-router-dom';
import { routesConfig } from 'shared/routeConfig/routeConfig';

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routesConfig).map(route => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
