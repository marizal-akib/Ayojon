import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Nav = () => {
  const { user } = useContext(AuthContext);

  const nav = (
    <>
      <li>
        <Link to={"/"} >Home</Link>
      </li>
      
      <li>
        <Link to={"/services"}>Services</Link>
      </li>
    
    </>
  );
  return (
    <div className="navbar sticky top-0 z-50 bg-base-100 px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu text-[#343a40] menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {nav}
          </ul>
        </div>
        <Link className="lg:w-1/5 md:w-1/3 w-1/2 pr-3" to={"/"}>
          <img src="/logo.jpg-removebg-preview.png"  alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {nav}
        </ul>
      </div>
      <div className="navbar-end">
      {user ? (
            <>
              <span>{user?.displayName}</span>
              <Link
             to="/dashboard"
             
                className="btn btn-outline mx-3 ml-3 border-b-4 border-orange-400 bg-slate-100"
              >
               Dashboard
              </Link>
            </>
          ) : (
            <>
            <Link
              className="btn btn-outline  border-b-4 border-orange-400 bg-slate-100"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="btn btn-outline mx-3 border-b-4 border-orange-400 bg-slate-100"
              to="/signUp"
            >
              Sign up
            </Link>
            </>
          )}
      </div>
    </div>
  );
};

export default Nav;
