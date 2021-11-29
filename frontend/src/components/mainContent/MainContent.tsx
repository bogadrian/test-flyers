import './mainContent.css';
import { AxiosError } from 'axios';

import { useFetchData } from '../../hooks/fetcxhData';

import { Card } from '../list';

export const MainContent: React.FC = () => {
  const { data, isLoading, isError, error } = useFetchData();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {(error as AxiosError).message}</span>;
  }

  return <>{data && <Card pages={data.pages} />}</>;
};
