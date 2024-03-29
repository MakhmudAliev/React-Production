import { AppRoutes, RoutePaths } from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
  path: string;
  text: string;
}

export const SidebarItemList: SidebarItemType[] = [
  {
    path: RoutePaths.main,
    text: AppRoutes.MAIN,
  },
  {
    path: RoutePaths.about,
    text: AppRoutes.ABOUT,
  },
  {
    path: RoutePaths.profile,
    text: AppRoutes.PROFILE,
  },
  {
    path: RoutePaths.articles,
    text: AppRoutes.ARTICLES,
  },
  {
    path: RoutePaths['article-details'],
    text: AppRoutes.ARTICLE_DETAILS,
  },
];
