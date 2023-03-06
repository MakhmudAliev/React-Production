import { classNames } from 'shared/lib/classNames/classNames';
// import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { userActions } from 'entities/User/model/slices/UserSlice';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onShowModal = useCallback(() => setIsAuthModalOpen(true), []);

  const onCloseModal = useCallback(() => setIsAuthModalOpen(false), []);

  const onLogOut = useCallback(() => dispatch(userActions.logout()), [dispatch]);

  if (authData) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onLogOut}>
          {t('sign out')}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onShowModal}>
        {t('sign-in')}
      </Button>
      {isAuthModalOpen && <LoginModal isOpen={isAuthModalOpen} onClose={onCloseModal} />}
    </div>
  );
});
