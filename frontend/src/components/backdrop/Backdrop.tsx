import './backdrop.css';
import { sideDrawerAtom } from '../../recoil';
import { useRecoilState } from 'recoil';

interface Props {}
export const Backdrop: React.FC<Props> = () => {
  const [sideDrwaerState, setSideDrwaerState] = useRecoilState(sideDrawerAtom);
  return (
    <div
      className="container_backdrop"
      onClick={() => setSideDrwaerState(!sideDrwaerState)}
    />
  );
};
