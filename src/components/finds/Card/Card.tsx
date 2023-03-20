import styles from './Card.module.scss';
import { IUser } from '@/types/types';
import { getAge } from '@/services/birthday/birthday';
import { FiX, FiHeart } from 'react-icons/fi';

interface CardProps {
  user: IUser;
  onLike: (id: string) => void;
  onDislike: (id: string) => void;
}

export const Card = ({
  onLike,
  onDislike,
  user: { username, birthday, games, pictures, _id },
}: CardProps) => {
  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: `url('${import.meta.env.VITE_API_URL}${pictures[0]}')`,
        backgroundSize: 'cover',

        backgroundPosition: 'center',
      }}
    >
      <div className={styles.buttons}>
        <FiX
          onClick={() => {
            onDislike(_id);
          }}
          className={styles.dislike}
          size={50}
          color='rgba(255, 0, 0)'
        />
        <FiHeart
          onClick={() => {
            onLike(_id);
          }}
          className={styles.like}
          size={50}
          color='rgba(0,255,0)'
        />
      </div>
      <h2 className={styles.username}>{username}</h2>
      <span>{getAge(birthday)}</span>
    </div>
  );
};
