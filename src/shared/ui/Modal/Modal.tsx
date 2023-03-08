import { useState, useCallback, useEffect } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

// const ANIMATION_DELAY = 300;

export const Modal = ({ className, children, isOpen, onClose, lazy }: ModalProps) => {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  // const [isClosing, setIsClosing] = useState(false);
  // const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const mods: Mods = {
    [cls.opened]: isOpen,
    // [cls.isClosing]: isClosing,
  };

  const handleClose = useCallback(() => {
    if (onClose) {
      // setIsClosing(true);
      // timerRef.current = setTimeout(() => {
      onClose();
      //   setIsClosing(false);
      // }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onContentClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', onKeyDown);
    }

    return () => {
      // clearTimeout(timerRef.current);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, handleClose]);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className, theme])}>
        <div className={cls.overlay} onClick={handleClose}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
