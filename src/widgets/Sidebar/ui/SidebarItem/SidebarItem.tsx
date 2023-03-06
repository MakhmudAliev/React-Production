import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from '../../../Sidebar/model/items';
import { useTranslation } from 'react-i18next';

interface SidebarItemProps {
  item: SidebarItemType;
}

export const SidebarItem = ({ item }: SidebarItemProps) => {
  const { t } = useTranslation();
  return (
    <AppLink theme={AppLinkTheme.SECONDARY} to={item.path}>
      {t(item.text)}
    </AppLink>
  );
};
