import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

// eslint-disable-next-line @typescript-eslint/promise-function-async
export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => import('./LoginForm'));
