import styles from './LoginSingUpForm.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { LoginBody, ITokens } from '@/services/auth/auth.interface';
import { useMutation } from '@tanstack/react-query';
import AuthService from '@/services/auth/auth.service';
import { useAuthContext } from '@/context/AuthContext';
export const LoginSingUpForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const { setToken } = useAuthContext();

  const loginMutation = useMutation({
    mutationFn: AuthService.login.bind(AuthService),
    onSuccess: (data: ITokens | undefined) => {
      if (data) {
        setToken(data.access_token);
      }
    },
    onError: () => {},
  });
  const signUpMutation = useMutation({
    mutationFn: AuthService.singUp.bind(AuthService),
    onSuccess: data => {
      toast.success('User was create');
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginBody>();

  const onSubmit: SubmitHandler<LoginBody> = data => {
    if (isLogin) {
      loginMutation.mutate(data);
    } else {
      signUpMutation.mutate(data);
    }
  };

  const notify = (text: string) => toast.error(text);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h1>{isLogin ? 'Login' : 'Sing Up'}</h1>
      <span>{errors.username && 'This field is required'}</span>
      <input {...register('username', { required: true })} />
      <span>{errors.password && 'This field is required'}</span>
      <input type='password' {...register('password', { required: true })} />
      <input type='submit' />
      <span
        onClick={() => {
          setIsLogin(prev => !prev);
          notify(isLogin ? 'Login' : 'Sing Up');
        }}
        className={styles.change}
      >
        {isLogin ? 'Sing Up' : 'Login'}
      </span>
    </form>
  );
};
