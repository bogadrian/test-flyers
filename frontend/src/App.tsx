import './App.css';
import { Header } from './components/header';
import { MainContent } from './components/mainContent';
import { SideDrawer } from './components/sideDrawer';
import { Backdrop } from './components/backdrop';
import { sideDrawerAtom } from './recoil';
import { useRecoilValue } from 'recoil';

function App() {
  const sideDrwaerState = useRecoilValue(sideDrawerAtom);
  return (
    <div
      className="App"
      style={sideDrwaerState ? { height: '100vh', overflow: 'hidden' } : {}}
    >
      <SideDrawer />
      {sideDrwaerState && <Backdrop />}
      <Header />
      <main>
        <MainContent />
      </main>
    </div>
  );
}

export default App;
