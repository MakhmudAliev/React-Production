import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import { ChangeEvent, InputHTMLAttributes, memo, useRef, useEffect } from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
}

export const Input = memo(
  ({ className, type = 'text', value, placeholder, onChange, autoFocus = false, ...otherProps }: InputProps) => {
    const onChangehandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    const ref = useRef<HTMLInputElement>();

    useEffect(() => {
      if (autoFocus) {
        console.log('🚀 ~ ref:', ref.current);
        ref.current.focus();
      }
    }, [autoFocus]);

    return (
      <div className={classNames(cls.Input, {}, [className])}>
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChangehandler}
          placeholder={placeholder}
          {...otherProps}
        />
      </div>
    );
  }
);
