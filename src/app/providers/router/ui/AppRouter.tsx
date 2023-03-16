import { Suspense, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppRouterProps, routesConfig } from 'shared/config/routeConfig/routeConfig';
import { RequireAuth } from './RequireAuth';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRouterProps) => {
    const element = <div className="page-wrapper">{route.element}</div>;

    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
      />
    );
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>{Object.values(routesConfig).map(renderWithWrapper)}</Routes>
    </Suspense>
  );
};

export default AppRouter;
