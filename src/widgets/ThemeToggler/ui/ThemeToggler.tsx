import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import LightThemeIcon from 'shared/assets/icons/theme-light.svg';
import DarkThemeIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface ThemeTogglerProps {
  className?: string;
}

export const ThemeToggler = ({ className }: ThemeTogglerProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} theme={ButtonTheme.CLEAR} className={classNames('', {}, [className])}>
      {theme === Theme.DARK ? <LightThemeIcon /> : <DarkThemeIcon />}
    </Button>
  );
};
