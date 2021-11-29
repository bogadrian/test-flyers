import { AxiosError } from 'axios';
import './sideDrawer.css';
import { CSSTransition } from 'react-transition-group';
import { useMediaQuery } from '../../hooks/mediaQuery';

import { sideDrawerAtom } from '../../recoil';
import { useRecoilValue } from 'recoil';
import { useFetchData } from '../../hooks/fetcxhData';
import { IData } from '../data-type';

type IPage = {
  data: { results: IData[]; totlaPages: number };
  nextPage: number;
};

interface Props {}
export const SideDrawer: React.FC = () => {
  const sideDrwaerState = useRecoilValue(sideDrawerAtom);

  const device = useMediaQuery();

  const { data, isLoading, isError, error, fetchNextPage } = useFetchData();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {(error as AxiosError).message}</span>;
  }
  return (
    <CSSTransition
      in={sideDrwaerState}
      timeout={500}
      classNames="drawer_animation"
      mountOnEnter
      unmountOnExit
    >
      <div className="container_sideDrawer">
        <img
          src={"https://source.unsplash.com/random/'+width+'x'+height+'"}
          alt="test"
          style={{
            width: '10rem',
            height: '10rem',
            borderRadius: '50%'
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '3rem'
          }}
        >
          <span style={{ fontSize: '5rem', fontWeight: 'bold' }}>
            Favourites
          </span>
          <span style={{ fontSize: '3rem', marginTop: '3rem' }}>
            The list of your prefferd flyers
          </span>
        </div>
        <div
          style={{
            width: '100%',
            height: '.2rem',
            backgroundColor: '#00000057',
            marginTop: '6rem'
          }}
        />
        <div>
          {data?.pages.map((elm: IPage, i: number) => {
            return (
              <div key={i}>
                {elm.data.results.map((card: IData) => {
                  return (
                    <div key={card.id} style={{ padding: '2rem' }}>
                      <span> {card.title}</span>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <button
          onClick={() => fetchNextPage()}
          style={{ width: '30%', marginTop: '2rem' }}
        >
          Load more ...
        </button>
      </div>
    </CSSTransition>
  );
};
