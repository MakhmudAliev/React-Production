import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { ThemeToggler } from 'widgets/ThemeToggler';
import { LangToggler } from 'widgets/LangToggler';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation();

  const [collapsed, setCollapsed] = useState(false);

  return (
    <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/">
        {t('main')}
      </AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
        {t('about')}
      </AppLink>
      <Button
        data-testid="sidebar-toggle"
        onClick={() => setCollapsed(prev => !prev)}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.togglers}>
        <ThemeToggler />
        <LangToggler className={cls.lang} />
      </div>
    </div>
  );
};
