import { Layout } from '@/components/ui';
import UserService from '@/services/user/user.service';
import { useQuery } from '@tanstack/react-query';
import styles from './Main.module.scss';

interface MainProps {}

export const Main = (props: MainProps) => {
  const { data, isLoading, isError } = useQuery(['user'], () =>
    UserService.getProfile()
  );

  if (isLoading || !data) return <div>loading</div>;
  if (isError) return <div>error</div>;

  return (
    <Layout user={data}>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita rem
      </div>
    </Layout>
  );
};
