import styles from './Chat.module.scss';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import ChatService from '@/services/chat/chat.service';
import { useState, useEffect } from 'react';
import { Socket } from 'socket.io-client';
import { useChat } from './../../../hooks/useChat';
interface ChatProps {
  chatId: string;
  userId: string;
  socket: Socket;
}

export const Chat = ({ chatId, userId, socket }: ChatProps) => {
  const { data, isError, isLoading } = useQuery([chatId], () =>
    ChatService.getMessagesFormChat(chatId)
  );
  const [message, setMessage] = useState('');

  const queryClient = useQueryClient();

  useEffect(() => {
    if (socket) {
      socket.on(chatId, (data: any) => {
        console.log(data);
      });
    }

    return () => {
      if (socket) {
        socket.removeListener(chatId);
      }
    };
  }, [socket]);

  if (isLoading || !data) return <div>loading</div>;
  if (isError) return <div>error</div>;

  return (
    <div className={styles.chat}>
      <div className={styles.messages}>
        {data.messages.map(msg => (
          <span
            key={msg.date + msg.message}
            className={
              userId === msg.userId ? styles.myMessage : styles.enemyMessage
            }
          >
            {msg.message}
          </span>
        ))}
      </div>
      <div className={styles.bottom}>
        <textarea
          className={styles.textarea}
          value={message}
          onChange={e => {
            setMessage(e.currentTarget.value);
          }}
        />
        <button
          className={styles.button}
          onClick={() => {
            if (message) {
              socket.emit('message', {
                chatId: chatId,
                message: message,
              });
              setMessage('');
            }
          }}
        >
          Отправить!
        </button>
      </div>
    </div>
  );
};
