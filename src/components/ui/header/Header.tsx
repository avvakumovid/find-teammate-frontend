import { PropsWithChildren } from 'react';
import styles from './Header.module.scss';
import { FiLogOut } from 'react-icons/fi';
import { IUser } from '@/types/types';

interface HeaderProps extends PropsWithChildren {
  user: IUser;
}

export const Header = ({ user }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <img
        className={styles.avatar}
        src={import.meta.env.VITE_API_URL + user.pictures[0]}
      />
      <span className={styles.username}>{user.username}</span>
      <FiLogOut size={20} />
    </header>
  );
};
