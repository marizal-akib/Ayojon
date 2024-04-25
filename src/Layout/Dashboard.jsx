import { Helmet } from "react-helmet";
import DashNav from "../Components/Pages/Dashboard/DashNav/DashNav";
import { Outlet } from "react-router-dom";


const Dashboard = () => {
  return (
    <>
    <Helmet>
      <title>Ayojon | Dashboard</title>
    </Helmet>
    <div className="flex">
      <DashNav></DashNav>
      <Outlet></Outlet>
    </div>
  </>
  );
};

export default Dashboard;