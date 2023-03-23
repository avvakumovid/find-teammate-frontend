import styles from './Chat.module.scss';
import {
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import ChatService from '@/services/chat/chat.service';
import { useState, useEffect, useRef } from 'react';
import { Socket } from 'socket.io-client';
import { IMessage } from '@/types/types';
interface ChatProps {
  chatId: string;
  userId: string;
  socket: Socket;
}

export const Chat = ({ chatId, userId, socket }: ChatProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const [skip, setSkip] = useState(0);
  const [messages, setMessages] = useState<IMessage[]>([]);

  const { data, isError, isLoading } = useQuery(
    [chatId, skip],
    () => ChatService.getMessagesFormChat(chatId, skip),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );
  const [message, setMessage] = useState('');

  const queryClient = useQueryClient();

  useEffect(() => {
    if (socket) {
      socket.on(chatId, (data: any) => {});
    }

    return () => {
      if (socket) {
        socket.removeListener(chatId);
      }
    };
  }, [socket]);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
      ref.current.addEventListener('scroll', e => {
        console.log(e);
      });
    }
  }, [ref.current]);

  useEffect(() => {
    if (data) {
      setMessages([...data.messages, ...messages]);
    }
  }, [data]);

  if (isLoading || !data) return <div>loading</div>;
  if (isError) return <div>error</div>;

  return (
    <div className={styles.chat}>
      <div ref={ref} className={styles.messages}>
        {messages.map(msg => (
          <span
            key={msg.date + msg.message}
            className={`${styles.message} ${
              userId === msg.userId ? styles.myMessage : styles.enemyMessage
            }`}
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
            setSkip(prev => prev + 1);
          }}
        >
          Next!
        </button>
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
