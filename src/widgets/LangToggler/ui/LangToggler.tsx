import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LangToggler.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface LangTogglerProps {
  className?: string;
}

export const LangToggler = ({ className }: LangTogglerProps) => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
  };
  return (
    <Button theme={ThemeButton.CLEAR} onClick={toggleLang} className={classNames(cls.LangToggler, {}, [className])}>
      {t('lang')}
    </Button>
  );
};
