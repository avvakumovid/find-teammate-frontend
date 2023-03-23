import UserService from '@/services/user/user.service';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import styles from './Chats.module.scss';
import { useAuthContext } from '@/context/AuthContext';
import { ChatCard } from './chat-card';
import { useSocket } from '@/hooks/useSocket';
import { Chat } from './chat';

const socketOptions = (token: string) => ({
  transportOptions: {
    polling: {
      extraHeaders: {
        authorization: `Bearer ${token}`, // 'Bearer h93t4293t49jt34j9rferek...'
      },
    },
  },
});

interface ChatsProps {}

export const Chats = ({}: ChatsProps) => {
  const { data, isLoading, isError } = useQuery(['chats'], () =>
    UserService.getChats()
  );
  const { user, token } = useAuthContext();
  const { socket } = useSocket(token);
  //let socket: any;
  //
  const queryClient = useQueryClient();
  //const connect = () => {
  //  socket = io('ws://localhost:80', socketOptions(token));
  //  socket.on('message', (data: any) => {
  //    queryClient.invalidateQueries(['chats']);
  //  });
  //};

  const sendMessage = (chatId: string, message: string) => {
    socket.emit('message', {
      chatId: chatId,
      message: message,
    });
  };

  if (isLoading || !data) return <div>loading</div>;
  if (isError) return <div>error</div>;
  return (
    <div className={styles.chats}>
      <div className={styles.cards}>
        {data.map(chat => {
          const participants = chat.participants.filter(
            p => p._id !== user?._id
          )[0];
          return (
            <ChatCard
              token={token}
              key={chat._id}
              id={chat._id}
              image={participants.pictures[0]}
              name={participants.username}
              lastMessage={
                chat.messages[chat.messages.length - 1]?.message ||
                'Начать чатНачать чатНачать чатНачать чатНачать чатНачать чат'
              }
              onClick={() => {
                socket.emit('message', {
                  message: Date.now(),
                  chatId: chat._id,
                });
              }}
            />
          );
        })}
      </div>
      <Chat
        chatId={'6414b9cbcc15a07c7ba018ee'}
        userId={user?._id ?? ''}
        socket={socket}
      />
    </div>
  );
};
