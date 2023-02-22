import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p className={cls.errorMessage}>{t('Something went wrong')}</p>
      <Button onClick={() => location.reload()} theme={ButtonTheme.OUTLINE}>
        {t('Reload Page')}
      </Button>
    </div>
  );
};
