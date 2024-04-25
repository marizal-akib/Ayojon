import { useContext, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";
import useUser from "../../../hooks/useUser";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaFolder, FaHome } from "react-icons/fa";
import ApplyBusiness from "../UserDash/ApplyBusiness";

const DashNav = () => {
  const { user, loading, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(true);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const [isAdmin] = useAdmin();
  const [isUser] = useUser();
  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-64" : "w-20 "
        } bg-gray-800 h-screen p-5 pt-8 relative duration-300 flex flex-col justify-between`}
      >
        <p
          onClick={() => setOpen(!open)}
          className={`absolute cursor-pointer -right-3 top-9 w-7 bg-slate-600 text-blue-400 border-blue-400
           border-2 rounded-full  ${!open && "rotate-180"}`}
        >
          <MdOutlineArrowBackIos />
        </p>

        <div className="flex flex-col gap-x-4 items-center ">
          {user ? (
            <>
              {loading ? (
                <span className="loading rounded-full loading-spinner text-success"></span>
              ) : (
                <img
                  className={`w-28 cursor-pointer duration-500 ${
                    open && "rotate-[360deg]"
                  }`}
                  src={user?.photoURL}
                />
              )}
            </>
          ) : (
            <span className="loading loading-spinner text-info"></span>
          )}
          <h1
            className={`text-blue-400 origin-left font-medium text-lg md:text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            {user?.displayName}
          </h1>
        </div>
        <ul className="pt-6 space-y-1">
          <li>
            <NavLink
              to="/"
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-slate-700 text-blue-400 text-sm items-center gap-x-4 
                  `}
            >
              <FaHome />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Home
              </span>
            </NavLink>
          </li>
          {isAdmin && (
            <>
              <NavLink
                to="/dashboard/application"
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-slate-700 text-blue-400 text-sm items-center gap-x-4 
                  `}
              >
                <FaFolder />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  Business Application
                </span>
              </NavLink>
            </>
          )}
          {/* {isTrainer && (
              <>
                {" "}
                   <NavLink
              to="/"
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-slate-700 text-blue-400 text-sm items-center gap-x-4 
                  `}
            >
              <FaHome />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Home
              </span>
            </NavLink>
                <li>
                  <NavLink to="/dashboard/addPost">
                    <FaEdit></FaEdit> Add Post
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/management">
                    <FaClipboardList></FaClipboardList> Class Management
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/memberManagement">
                    <FaUsersCog></FaUsersCog> Member Management
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addNewClass">
                    <FaCalendarPlus></FaCalendarPlus> Add New Class
                  </NavLink>
                </li>
              </>
            )} */}

          {isUser && (
            <>
              {" "}
              <NavLink
                to="/"
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-slate-700 text-blue-400 text-sm items-center gap-x-4 
                  `}
              >
                <FaHome />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  Home
                </span>
              </NavLink>
              <li>
                <NavLink to="/dashboard/apply">
                  <ApplyBusiness></ApplyBusiness> Apply As Business
                </NavLink>
              </li>
            </>
          )}
          <div className={`${open && "hidden"} pt-10`}> </div>
          <div className={`${!open && "hidden"} pt-8 origin-left duration-200 divider`}></div>
          <button
            onClick={handleLogout}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-slate-700 text-blue-400 text-sm items-center gap-x-4 
            mt-auto `}
          >
            <img
              className="w-4"
              src="https://i.ibb.co/vwKk87x/Screenshot-2023-12-22-173728-removebg-preview.png"
            />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Logout
            </span>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default DashNav;
