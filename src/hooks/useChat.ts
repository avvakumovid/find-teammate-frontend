import { Socket } from 'socket.io-client';
import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';

export const useChat = (socket: Socket, chatId: string) => {

  const queryClient = useQueryClient();

  const sendMessage = (message: string) => {
    if (socket) {
      socket.emit('message', {
        chatId: chatId,
        message: message,
      });
    }
  };

  useEffect(() => {
    if (socket) {
      socket.on(chatId, (data: any) => {
        console.log(data);
        queryClient.invalidateQueries([chatId])
      })
    }


    return () => {
      if (socket) {
        socket.removeListener(chatId)
      }
    }
  }, [])

  return { sendMessage }
}