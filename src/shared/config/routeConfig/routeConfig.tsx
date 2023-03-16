import { AboutPage } from 'pages/AboutPage';
import ArticleDetailsPage from 'pages/ArticleDetailsPage/ui/ArticleDetailsPage';
import ArticlesPage from 'pages/ArticlesPage/ui/ArticlesPage';
import { MainPage } from 'pages/MainPage';
import { NotFound } from 'pages/NotFound';
import { ProfilePage } from 'pages/ProfilePage';
import { RouteProps } from 'react-router-dom';

export type AppRouterProps = RouteProps & { authOnly?: boolean };

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article-details',
  // last
  NOT_FOUND = 'not-found',
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE_DETAILS]: '/articles/', // + id
  [AppRoutes.NOT_FOUND]: '*',
};

export const routesConfig: Record<AppRoutes, AppRouterProps> = {
  [AppRoutes.MAIN]: { path: RoutePaths.main, element: <MainPage /> },
  [AppRoutes.ABOUT]: { path: RoutePaths.about, element: <AboutPage /> },
  [AppRoutes.PROFILE]: { path: RoutePaths.profile, element: <ProfilePage />, authOnly: true },
  [AppRoutes.ARTICLES]: { path: RoutePaths.articles, element: <ArticlesPage />, authOnly: true },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: `${RoutePaths['article-details']}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  [AppRoutes.NOT_FOUND]: { path: RoutePaths['not-found'], element: <NotFound /> },
};
