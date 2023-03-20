import { useQueryClient } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { toast } from 'react-toastify';

let socket: any;

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

  const [was, setWas] = useState(false)

  useEffect(() => {

    if (!socket) {
      socket = io('ws://localhost:80', socketOptions)
      socket.on('connect', () => {
        toast.success('connect')
      })
      socket.on('message', (data: any) => {
        console.log(data);
        queryClient.invalidateQueries(['chats']);
      });
    }



  }, [])

  return { socket }
}