import styles from './button.module.scss';

interface ButtonProps {
  text: string;
  type?: 'outlined' | 'contained';
  onClick: () => void;
}

export const Button = ({ text, type = 'outlined', onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles.gradient} ${styles[type]}`}
    >
      {text}
    </button>
  );
};
