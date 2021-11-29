import { useEffect, useCallback } from 'react';

import { useInfiniteQuery } from 'react-query';
import { fetchData } from '../../components/utilis/fetchList';

export const useFetchData = (sideDrwaerState?: boolean) => {
  const { data, isLoading, isError, hasNextPage, fetchNextPage, error } =
    useInfiniteQuery('list', fetchData, {
      getNextPageParam: lastPage => {
        if (lastPage.nextPage < lastPage.data.totalPages)
          return lastPage.nextPage;
        return undefined;
      }
    });

  const handleScroll = useCallback(() => {
    console.log('ssss');
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;

    if (bottom && hasNextPage) {
      fetchNextPage();
    }
    if (sideDrwaerState && hasNextPage) {
      console.log('fires');
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, sideDrwaerState]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, sideDrwaerState]);

  return { data, isLoading, isError, error, fetchNextPage };
};
