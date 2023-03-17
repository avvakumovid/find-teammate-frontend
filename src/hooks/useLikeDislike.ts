import { useMutation, useQueryClient } from '@tanstack/react-query';
import UserService from '@/services/user/user.service';

export const useLikeDislike = () => {
  const queryClient = useQueryClient();

  const { mutate: onLike } = useMutation(
    ['like'],
    (userId: string) => UserService.like(userId),
    {
      onSuccess: data => {
        queryClient.invalidateQueries(['candidates']);
      },
    }
  );
  const { mutate: onDislike } = useMutation(
    ['dislike'],
    (userId: string) => UserService.dislike(userId),
    {
      onSuccess: data => {
        queryClient.invalidateQueries(['candidates']);
      },
    }
  );

  return { onLike, onDislike }
}