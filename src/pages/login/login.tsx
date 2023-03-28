import styles from './login.module.scss';
import logo from '@assets/logo.svg';
import { Button } from '@/components/ui/button/button';
import { Footer } from '@/components/ui/footer/footer';
import { LoginForm } from '@/components/ui/forms/login-form/login-form';

export const Login = () => {
  return (
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
      </main>
      <Footer />
    </div>
  );
};
