import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routesConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routesConfig).map(route => (
          <Route key={route.path} path={route.path} element={<div className="page-wrapper">{route.element}</div>} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
