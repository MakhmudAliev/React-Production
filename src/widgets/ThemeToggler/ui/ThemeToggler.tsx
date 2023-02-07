import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import LightThemeIcon from 'shared/assets/icons/theme-light.svg';
import DarkThemeIcon from 'shared/assets/icons/theme-dark.svg';
import cls from './ThemeToggler.module.scss';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeTogglerProps {
  className?: string;
}

export const ThemeToggler = ({ className }: ThemeTogglerProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} theme={ThemeButton.CLEAR} className={classNames(cls.ThemeToggler, {}, [className])}>
      {theme === Theme.DARK ? <LightThemeIcon /> : <DarkThemeIcon />}
    </Button>
  );
};
