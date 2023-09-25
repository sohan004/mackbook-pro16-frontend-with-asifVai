import { Outlet } from "react-router-dom";
import img1 from './assets/bg-color-them/Ellipse 1.png'
import img2 from './assets/bg-color-them/Ellipse 2.png'
import img3 from './assets/bg-color-them/Ellipse 3.png'
import img4 from './assets/bg-color-them/Ellipse 4.png'
import Nav from "./components/Nav/Nav";

const App = () => {
  return (
    <div style={{ background: 'linear-gradient(0deg, rgba(69,8,74,1) 0%, rgba(1,1,1,1) 100%)' }}>
      <div  className="h-screen  overflow-hidden overflow-y-auto w-full text-white relative">

        <img src={img2} className="fixed z-20 bottom-0 left-0" alt="" />
        <img src={img1} className="fixed z-10 bottom-0 left-0" alt="" />
        <img src={img4} className="fixed z-10 bottom-0 right-0" alt="" />
        <img src={img3} className="fixed z-20 bottom-0 right-0" alt="" />

        <Nav></Nav>
        <Outlet></Outlet>

      </div>
    </div>
  );
};

export default App;