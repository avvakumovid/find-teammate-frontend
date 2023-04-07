import styles from './login.module.scss';
import logo from '@assets/logo.svg';
import { Button } from '@/components/ui/button/button';
import { Footer } from '@/components/ui/footer/footer';
import { LoginForm } from '@/components/ui/forms/login-form/login-form';
import { useAuthContext } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Modal } from '@/components/ui/modal/modal';
import { useState } from 'react';
import { ForgotPasswordModal } from '@/components/ui/modal/forgot-password-modal/forgot-password-modal';

export const Login = () => {
  const [show, setShow] = useState(false);

  const { token } = useAuthContext();
  const navigate = useNavigate();
  if (token) navigate('/');

  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <a href='/' className={styles.logo}>
            <img src={logo} className='logo' alt='Vite logo' />
            find teammates
          </a>
          <div className={styles.right}>
            <span>Впервые здесь?</span>
            <Button
              text='Регистрация'
              onClick={() => {
                console.log('CLICK');
              }}
              type='outlined'
            />
          </div>
        </header>
        <main className={styles.main}>
          <h1 className={styles.heading}>Знакомства без преград</h1>
          <p className={styles.subHeading}>
            Для современного мира сплочённость команды профессионалов однозначно
            фиксирует необходимость системы обучения кадров, соответствующей
            насущным потребностям.
          </p>
          <LoginForm />
          <a onClick={() => setShow(true)} className={styles.reset}>
            Я не помню пароль
          </a>
        </main>
        <Footer />
      </div>
      {show && <ForgotPasswordModal close={() => setShow(false)} />}
    </>
  );
};
