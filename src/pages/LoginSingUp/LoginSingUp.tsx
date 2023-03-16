import { Layout, LoginSingUpForm } from '@/components/ui';
import styles from './LoginSingUp.module.scss';

interface ILoginSignUpProps {}

export const LoginSignUp = (props: ILoginSignUpProps) => {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <LoginSingUpForm />
      </div>
    </Layout>
  );
};
