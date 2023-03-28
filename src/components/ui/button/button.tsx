import { MouseEventHandler } from 'react';
import styles from './button.module.scss';

interface ButtonProps {
  text: string;
  type?: 'outlined' | 'contained';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  size?: 'normal' | 'large';
  isSubmit?: boolean;
}

export const Button = ({
  text,
  type = 'outlined',
  size = 'normal',
  onClick,
  isSubmit = false,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles.gradient} ${styles[type]} ${styles[size]}`}
      type={isSubmit ? 'submit' : 'button'}
    >
      {text}
    </button>
  );
};
