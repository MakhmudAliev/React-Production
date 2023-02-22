/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';
// import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { useState } from 'react';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={() => setIsAuthModalOpen(prev => !prev)}>
        {t('sign-in')}
      </Button>
      {/* <AppLink theme={AppLinkTheme.SECONDARY} to="/">
        {t('main')}
      </AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
        {t('about')}
      </AppLink> */}
      <Modal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(prev => !prev)}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore voluptates beatae omnis est obcaecati magni,
          accusantium quod. Sed sit architecto, neque, saepe quaerat, excepturi dolores id atque enim sunt alias!
        </p>
      </Modal>
    </div>
  );
};
