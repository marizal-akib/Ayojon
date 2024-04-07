import { Outlet, useLocation } from "react-router-dom";
import Nav from "../Components/Common/Nav";
import Footer from "../Components/Common/Footer";

const Main = () => {
  const location = useLocation();
  const noHeadFoot = location.pathname.includes('login') || location.pathname.includes('signUp')
  return (
    <div className="max-w-7xl mx-auto">
     {noHeadFoot || <Nav></Nav>}
      <Outlet></Outlet>
     {noHeadFoot || <Footer></Footer>}
    </div>
  );
};

export default Main;
