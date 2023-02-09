import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface LangTogglerProps {
  className?: string;
}

export const LangToggler = ({ className }: LangTogglerProps) => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
  };
  return (
    <Button theme={ThemeButton.CLEAR} onClick={toggleLang} className={classNames('', {}, [className])}>
      {t('lang')}
    </Button>
  );
};
