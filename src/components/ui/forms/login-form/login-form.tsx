import { useMutation } from '@tanstack/react-query';
import styles from './login-form.module.scss';
import AuthService from '@/services/auth/auth.service';
import { ITokens, LoginBody } from '@/services/auth/auth.interface';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '@/components/ui/inputs/input/input';
import { PasswordInput } from '@/components/ui/inputs/password-input/password-input';
import { Button } from '@/components/ui/button/button';
import { GoMail } from 'react-icons/go';

interface LoginFormProps {}

export const LoginForm = ({}: LoginFormProps) => {
  //const { setToken } = useAuthContext();

  const loginMutation = useMutation({
    mutationFn: AuthService.login.bind(AuthService),
    onSuccess: (data: ITokens | undefined) => {
      if (data) {
        //  setToken(data.access_token);
      }
    },
    onError: () => {},
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginBody>();

  const onSubmit: SubmitHandler<LoginBody> = data => {
    loginMutation.mutate(data);
    console.log(data);
  };
  const u = register('username', { required: true });

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        leftIconClick={() => {}}
        type='text'
        placeholder='Введите электронную почту'
        leftIcon={GoMail}
        required={!!errors.username}
        {...register('username', { required: true })}
      />
      <PasswordInput
        placeholder='Введите пароль'
        leftIcon={GoMail}
        required={!!errors.password}
        {...register('password', { required: true })}
      />
      <Button text='Войти' type='contained' size='large' isSubmit />
      <a href='#' className={styles.reset}>
        Я не помню пароль
      </a>
    </form>
  );
};
