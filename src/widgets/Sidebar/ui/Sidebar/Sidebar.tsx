import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { ThemeToggler } from 'widgets/ThemeToggler';
import { LangToggler } from 'widgets/LangToggler';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <button onClick={() => setCollapsed(prev => !prev)}>{t('toggle')}</button>
      <div className={cls.togglers}>
        <ThemeToggler />
        <LangToggler className={cls.lang} />
      </div>
    </div>
  );
};
