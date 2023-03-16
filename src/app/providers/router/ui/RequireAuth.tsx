import { Navigate, useLocation } from 'react-router-dom';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const authData = useSelector(getUserAuthData);
  const location = useLocation();

  if (!authData) {
    return <Navigate to={RoutePaths.main} state={{ from: location }} replace />;
  }

  return children;
};
