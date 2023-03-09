/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { getProfileData } from '../model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading/getProfileIsLoading';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation();

  const profileData = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      {/* eslint-disable-next-line multiline-ternary */}
      {isLoading ? (
        <Text text="Loading profile data..." />
      ) : (
        <>
          <Text title={t('profile-page')} className={cls.ProfileTitle} />
          <div>First Name: {profileData?.first}</div>
          <div>Last Name: {profileData?.lastname}</div>
          <div>Age: {profileData?.age}</div>
          <div>Country: {profileData?.country}</div>
          <div>City: {profileData?.city}</div>
        </>
      )}
    </div>
  );
};
