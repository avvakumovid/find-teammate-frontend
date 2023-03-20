import { Chats } from '@/components/chats';
import { Finds } from '@/components/finds';
import { Layout } from '@/components/ui';
import UserService from '@/services/user/user.service';
import { useQuery } from '@tanstack/react-query';
import styles from './Main.module.scss';
import { useAuthContext } from '@/context/AuthContext';

interface MainProps {}

export const Main = (props: MainProps) => {
  const { user, setUser } = useAuthContext();
  const { data, isLoading, isError } = useQuery(
    ['user'],
    () => UserService.getProfile(),
    {
      onSuccess(data) {
        if (data) {
          setUser(data);
        }
      },
    }
  );

  if (isLoading || !user) return <div>loading</div>;
  if (isError) return <div>error</div>;

  return (
    <Layout user={user}>
      <Chats />
      <Finds />
    </Layout>
  );
};
