import { HamburgerButton } from '../HamburgerButton';
import { sideDrawerAtom } from '../../recoil';
import { useRecoilValue } from 'recoil';
import { useMediaQuery } from '../../hooks/mediaQuery';
import { SideDrawer } from '../sideDrawer';
import { Backdrop } from '../backdrop';

import './header.css';

export const Header: React.FC = () => {
  const sideDrwaerState = useRecoilValue(sideDrawerAtom);
  const device = useMediaQuery();

  return (
    <>
      {/* <SideDrawer />
      {sideDrwaerState && <Backdrop />} */}
      <div className="header">
        <HamburgerButton device={device} />
        <span className="header_title">ShopFully</span>
      </div>
    </>
  );
};
