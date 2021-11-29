import './hamburgerButton.css';
import { sideDrawerAtom } from '../../recoil';
import { useRecoilState } from 'recoil';
interface Props {
  device: string;
}

export const HamburgerButton: React.FC<Props> = ({ device }) => {
  const [sideDrwaerState, setSideDrwaerState] = useRecoilState(sideDrawerAtom);
  return (
    <div
      className={`hamburger-container-${
        device === 'desktop' ? 'large' : 'small'
      }`}
      onClick={() => setSideDrwaerState(!sideDrwaerState)}
    >
      <input
        type="checkbox"
        id="hamburger"
        checked={sideDrwaerState}
        className="hamburger-input"
        onChange={() => setSideDrwaerState(!sideDrwaerState)}
      />
      <label
        htmlFor="hamburger"
        className={`hamburger-icon-${device === 'desktop' ? 'large' : 'small'}`}
      >
        &nbsp;
      </label>
    </div>
  );
};
