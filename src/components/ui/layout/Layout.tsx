import { PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Layout.module.scss';
import { Header } from './../header/Header';
import { IUser } from '@/types/types';

interface LayoutProps extends PropsWithChildren {
  user?: IUser;
}

export const Layout = ({ children, user }: LayoutProps) => {
  return (
    <div className={styles.wrapper}>
      {user && <Header user={user} />}
      <div className={styles.main}>{children}</div>
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </div>
  );
};
