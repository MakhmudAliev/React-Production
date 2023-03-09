import { fetchProfileData, profileReducer } from 'entities/Profile';
import { ProfileCard } from 'entities/Profile/ui/ProfileCard';
import { FC, ReactNode, useEffect } from 'react';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynmicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ProfilePageProps {
  children?: ReactNode;
}

const ProfilePage: FC<ProfilePageProps> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader name="profile" reducer={profileReducer} removeAfterUnmount>
      <ProfileCard />
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
