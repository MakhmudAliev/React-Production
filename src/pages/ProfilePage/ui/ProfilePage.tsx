import { profileReducer } from 'entities/Profile';
import { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynmicModuleLoader';

interface ProfilePageProps {
  children?: ReactNode;
}

const ProfilePage: FC<ProfilePageProps> = () => {
  const { t } = useTranslation();
  return (
    <DynamicModuleLoader name="profile" reducer={profileReducer} removeAfterUnmount>
      <div>{t('profile-page')}</div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
