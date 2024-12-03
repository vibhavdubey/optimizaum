import { NavLink } from "react-router-dom";
import { Logos } from "../../assets/assets";
import SupportSVG from "../../assets/SupportSVG";
import {
  UserIcon,
  AcademicCapIcon,
  CalendarIcon,
  UsersIcon,
  ChatBubbleLeftEllipsisIcon,
  FolderIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";

const DashboardStudent = () => {
  const { userType, setUserType, navigate } = useContext(MyContext);
  const handleLogout = () => {
    setUserType("home");
    navigate("/");
  };
  return (
    <div className="max-h-[98vh] w-[25%] overflow-y-auto m-1 bg-white shadow-md flex flex-col justify-between rounded-2xl py-4 sticky top-2 custom-scrollbar">
      {/* Top Section */}
      <div className="my-5">
        {/* Logo */}
        <div className="flex items-center justify-start w-full h-16">
          <div className="bg-blue-500 text-white rounded-full w-14 h-14 flex items-center justify-center ml-6">
            <img src={Logos.Logo} alt="Logo" className="w-14 h-14" />
          </div>
        </div>

        {/* Menu Items */}
        <ul className="mt-6 space-y-4 h-[50vh] mb-5">
          <li className="w-full px-4 hover:border-r-4 border-blue-500">
            <NavLink
              to="/student-dashboard"
              className="flex items-center space-x-3 text-gray-500 hover:text-blue-500 cursor-pointer hover:bg-[#EAF3FE] px-2 py-3 rounded-[10px] text-base"
            >
              <UserIcon className="w-6 h-6" />
              <span className="font-medium">Dashboard</span>
            </NavLink>
          </li>
          <li className="w-full px-4 hover:border-r-4 border-blue-500">
            <NavLink
              to="/student"
              className="flex items-center space-x-3 text-gray-500 hover:text-blue-500 cursor-pointer hover:bg-[#EAF3FE] px-2 py-3 rounded-[10px] text-base"
            >
              <UserIcon className="w-6 h-6" />
              <span className="font-medium">Student</span>
            </NavLink>
          </li>
          <li className="w-full px-4 hover:border-r-4 border-blue-500">
            <NavLink
              to="/student-department"
              className="flex items-center space-x-3 text-gray-500 hover:text-blue-500 cursor-pointer hover:bg-[#EAF3FE] px-2 py-3 rounded-[10px] text-base"
            >
              <AcademicCapIcon className="w-6 h-6" />
              <span className="font-medium">Department</span>
            </NavLink>
          </li>
          <li className="w-full px-4 hover:border-r-4 border-blue-500">
            <NavLink
              to="/student-course"
              className="flex items-center space-x-3 text-gray-500 hover:text-blue-500 cursor-pointer hover:bg-[#EAF3FE] px-2 py-3 rounded-[10px] text-base"
            >
              <CalendarIcon className="w-6 h-6" />
              <span className="font-medium">Course</span>
            </NavLink>
          </li>
          <li className="w-full px-4 hover:border-r-4 border-blue-500">
            <NavLink
              to="/student-session"
              className="flex items-center space-x-3 text-gray-500 hover:text-blue-500 cursor-pointer hover:bg-[#EAF3FE] px-2 py-3 rounded-[10px] text-base"
            >
              <CalendarIcon className="w-6 h-6" />
              <span className="font-medium">Session</span>
            </NavLink>
          </li>
          <li className="w-full px-4 hover:border-r-4 border-blue-500">
            <NavLink
              to="/student-batch"
              className="flex items-center space-x-3 text-gray-500 hover:text-blue-500 cursor-pointer hover:bg-[#EAF3FE] px-2 py-3 rounded-[10px] text-base"
            >
              <UsersIcon className="w-6 h-6" />
              <span className="font-medium">Batch</span>
            </NavLink>
          </li>
          <li className="w-full px-4 hover:border-r-4 border-blue-500">
            <NavLink
              to="/student-chat"
              className="flex items-center space-x-3 text-gray-500 hover:text-blue-500 cursor-pointer hover:bg-[#EAF3FE] px-2 py-3 rounded-[10px] text-base"
            >
              <ChatBubbleLeftEllipsisIcon className="w-6 h-6" />
              <span className="font-medium">Chat</span>
            </NavLink>
          </li>
          <li className="w-full px-4 hover:border-r-4 border-blue-500">
            <NavLink
              to="/student-info-portal"
              className="flex items-center space-x-3 text-gray-500  hover:text-blue-500 cursor-pointer hover:bg-[#EAF3FE] px-2 py-3 rounded-[10px] text-base"
            >
              <FolderIcon className="w-6 h-6" />
              <span className="font-medium">Info Portal</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Bottom Section */}
      <div className="mt-52">
        <div className="">
          <SupportSVG />
        </div>
        <div
          onClick={handleLogout}
          className="mt-6 px-4 flex items-center space-x-3 text-gray-500 hover:text-red-500 cursor-pointer text-base"
        >
          <ArrowLeftOnRectangleIcon className="w-6 h-6" />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardStudent;
