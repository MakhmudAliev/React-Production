import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username, password, isLoading, error } = useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title="Sign in" />
      {error && <Text theme={TextTheme.ERROR} text={error} />}
      <Input
        autoFocus
        type="text"
        className={cls.input}
        placeholder="Username"
        onChange={onChangeUsername}
        value={username}
      />
      <Input type="text" className={cls.input} placeholder="Password" onChange={onChangePassword} value={password} />
      <Button theme={ButtonTheme.OUTLINE} className={cls.loginBtn} onClick={onLoginClick} disabled={isLoading}>
        {t('login')}
      </Button>
    </div>
  );
});
