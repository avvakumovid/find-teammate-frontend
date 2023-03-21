import { useQueryClient } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';
import { toast } from 'react-toastify';
import { ISocketMessage } from '@/types/types';

let socket: Socket;

export const useSocket = (token: string) => {

  const queryClient = useQueryClient();

  const socketOptions = {
    transportOptions: {
      polling: {
        extraHeaders: {
          authorization: `Bearer ${token}`, // 'Bearer h93t4293t49jt34j9rferek...'
        },
      },
    },
  }


  useEffect(() => {
    if (!socket) {
      socket = io('ws://localhost:80', socketOptions)

      socket.on('connect', () => {
        toast.success('connect')
      })
      socket.on('message', (data: ISocketMessage) => {
        console.log(data);
        queryClient.invalidateQueries(['chats'])
        queryClient.invalidateQueries([data.chatId])
      });

    }
  }, [])

  return { socket }
}