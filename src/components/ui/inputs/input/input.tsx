import styles from './input.module.scss';
import { IconType } from 'react-icons';
import { AiOutlineWarning } from 'react-icons/ai';
import { forwardRef, InputHTMLAttributes, PropsWithoutRef } from 'react';

export interface InputProps
  extends PropsWithoutRef<InputHTMLAttributes<HTMLInputElement>> {
  leftIconClick?: () => void;
  leftIcon?: IconType;
  rightIconClick?: () => void;
  rightIcon?: IconType;
  rightIconColor?: string;
  placeholder?: string;
  type?: 'email' | 'number' | 'text' | 'password';
  className?: string;
}

export const Input = forwardRef(
  (
    {
      leftIcon,
      leftIconClick,
      rightIcon,
      rightIconClick,
      rightIconColor = '#8B5D9A',
      placeholder = '',
      type = 'text',
      className,
      required,
      ...rest
    }: InputProps,
    ref: any
  ) => {
    return (
      <div className={`${styles.container}  ${className}`}>
        {leftIcon &&
          leftIcon({
            className: styles.leftIcon,
            onClick: () => {
              if (leftIconClick) {
                leftIconClick();
              }
            },
          })}
        <input
          type={type}
          placeholder={placeholder}
          className={`
          ${styles.input} 
          ${leftIcon && styles.isLeft}  
          ${rightIcon && styles.isRight}
          ${required && styles.error}
          `}
          {...rest}
          ref={ref}
        />
        {required ? (
          <AiOutlineWarning color='#A01414' className={styles.rightIcon} />
        ) : rightIcon ? (
          rightIcon({
            color: rightIconColor,
            className: styles.rightIcon,
            onClick: () => {
              if (rightIconClick) {
                rightIconClick();
              }
            },
          })
        ) : (
          <></>
        )}
      </div>
    );
  }
);
