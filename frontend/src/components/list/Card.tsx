import './list.css';

import { IData } from '../data-type';
import { sideDrawerAtom } from '../../recoil';
import { useRecoilValue } from 'recoil';

type IPage = {
  data: { results: IData[]; totlaPages: number };
  nextPage: number;
};

interface Props {
  pages: IPage[];
}

export const Card: React.FC<Props> = ({ pages }) => {
  const sideDrwaerState = useRecoilValue(sideDrawerAtom);
  return (
    <div className="container">
      {pages.map((elm: IPage, i: number) => {
        return (
          <div key={i} className="list-container">
            {elm.data.results.map((card: IData) => {
              return (
                <div className="card-container" key={card.id}>
                  <img
                    src={
                      "https://source.unsplash.com/random/'+width+'x'+height+'"
                    }
                    alt="test"
                    style={{ width: '100%', height: '30rem' }}
                  />
                  <div className="card">
                    <span className="card-text"> Title - {card.title}</span>
                    <span className="card-text">
                      Start Date - {card.start_date}
                    </span>
                    <span className="card-text">
                      End Date - {card.end_date}
                    </span>
                    <span className="card-text">
                      Is Published - {card.is_published}
                    </span>
                    <span className="card-text">
                      Retailer - {card.retailer}
                    </span>
                    <span className="card-text">
                      Category - {card.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
