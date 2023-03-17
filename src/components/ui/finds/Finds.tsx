import styles from './Finds.module.scss';
import { useQuery } from '@tanstack/react-query';
import UserService from '@/services/user/user.service';
import { Card } from './Card';
import { useLikeDislike } from '@/hooks/useLikeDislike';

interface FindsProps {}

export const Finds = ({}: FindsProps) => {
  const { data, isLoading, isError } = useQuery(['candidates'], () =>
    UserService.getCandidates()
  );
  const { onLike, onDislike } = useLikeDislike();
  if (isLoading || !data) return <div>loading</div>;
  if (isError) return <div>error</div>;

  return (
    <div>
      {data.map(user => (
        <Card
          key={user._id}
          user={user}
          onLike={onLike}
          onDislike={onDislike}
        />
      ))}
    </div>
  );
};
