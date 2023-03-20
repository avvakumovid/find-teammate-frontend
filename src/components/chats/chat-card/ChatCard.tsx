import styles from './ChatCard.module.scss';

interface ChatCardProps {
  id: string;
  image: string;
  name: string;
  lastMessage: string;
  onClick: (chatId: string) => void;
}

export const ChatCard = ({
  image,
  name,
  lastMessage,
  id,
  onClick,
}: ChatCardProps) => {
  return (
    <div className={styles.chat}>
      <img
        className={styles.image}
        src={import.meta.env.VITE_API_URL + image}
      />
      <div className={styles.body}>
        <span className={styles.name}>{name}</span>
        <span className={styles.message}>{lastMessage}</span>
        <button
          onClick={() => {
            onClick(id);
          }}
        >
          SEND!
        </button>
      </div>
    </div>
  );
};
