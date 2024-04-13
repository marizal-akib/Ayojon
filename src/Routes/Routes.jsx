import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Pages/Home/Home";
import Services from "../Components/Pages/Services/Services";
import Login from "../Components/Pages/Authintication/Login";
import SingUp from "../Components/Pages/Authintication/SingUp";
import Business from "../Components/Pages/Business/Business";
import ServicesDetails from "../Components/Pages/Services/ServicesDetails/ServicesDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SingUp></SingUp>,
      },
      {
        path: "/business/:id",
        element: <Business></Business>,
        loader: ({ params }) => fetch("http://localhost:5000/services"),
      },
      {
        path: "/services/:id",
        element: <ServicesDetails></ServicesDetails>,
        loader: ({ params }) => fetch("http://localhost:5000/services"),
      },
    ],
  },
]);
