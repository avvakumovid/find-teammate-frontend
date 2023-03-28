import styles from './input.module.scss';
import {
  AiOutlineLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from 'react-icons/ai';
import { Input, InputProps } from '@/components/ui/inputs/input/input';
import { forwardRef, useState } from 'react';

interface PasswordInputProps extends InputProps {}

export const PasswordInput = forwardRef(
  (props: PasswordInputProps, ref: any) => {
    const [showPass, setShowPass] = useState(false);
    return (
      <Input
        {...props}
        ref={ref}
        type={showPass ? 'text' : 'password'}
        leftIcon={AiOutlineLock}
        rightIcon={showPass ? AiOutlineEyeInvisible : AiOutlineEye}
        rightIconClick={() => {
          setShowPass(prev => !prev);
        }}
      />
    );
  }
);
