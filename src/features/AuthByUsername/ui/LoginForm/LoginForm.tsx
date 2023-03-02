import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginUsername } from '../../model/selectors/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError';
import cls from './LoginForm.module.scss';
import { DynmicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynmicModuleLoader';

export interface LoginFormProps {
  className?: string;
}

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

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
    <DynmicModuleLoader name="loginForm" reducer={loginReducer}>
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
    </DynmicModuleLoader>
  );
});

export default LoginForm;
