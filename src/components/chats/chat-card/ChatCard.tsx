import { useSocket } from '@/hooks/useSocket';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Socket } from 'socket.io-client';
import styles from './ChatCard.module.scss';
interface ChatCardProps {
  id: string;
  image: string;
  name: string;
  lastMessage: string;
  token: string;
  onClick: () => void;
}

export const ChatCard = ({
  image,
  name,
  lastMessage,
  id,
  token,
  onClick,
}: ChatCardProps) => {
  return (
    <div className={styles.chatCard}>
      <img
        className={styles.image}
        src={import.meta.env.VITE_API_URL + image}
      />

      <div className={styles.body}>
        <span className={styles.name}>{name}</span>
        <span className={styles.message}>{lastMessage}</span>
        <button
          onClick={() => {
            onClick();
          }}
        >
          SEND!
        </button>
      </div>
    </div>
  );
};
