import { memo, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeToggler } from 'widgets/ThemeToggler';
import { LangToggler } from 'widgets/LangToggler';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { SidebarItemList } from '../../../Sidebar/model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const itemsList = useMemo(() => SidebarItemList.map(item => <SidebarItem item={item} key={item.path} />), []);

  return (
    <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <nav className={cls.navbar}>{itemsList}</nav>

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
});
