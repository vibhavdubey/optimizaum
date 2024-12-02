import { SlBell } from "react-icons/sl";
import StudentImg from "../assets/studentImg.png";
import { IoCalendarClearOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="p-4">
      <div className=" flex flex-col justify-end gap-5 w-full">
        <div className="flex justify-end gap-4 h-10">
          <button className="px-3 py-2 bg-white rounded-lg text-xl font-bold">
            <SlBell />
          </button>
          <button className="flex justify-start items-center gap-2 rounded-lg px-3 py-2  bg-white">
            <img src={StudentImg} alt="" className="w-8 h-8 rounded-full" />
            <span className="text-sm font-semibold">College Name</span>
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="mb-3">
          <p className="text-base text-gray-400 mb-2">
            Powered by AppMingle Media
          </p>
          <h1 className="text-2xl font-semibold">Department</h1>
        </div>
        <button className="flex justify-start gap-3 items-center w-[25%] h-10 px-3 py-2 bg-gray-200 rounded-lg">
          <span className="text-xl font-extrabold">
            <IoCalendarClearOutline />
          </span>
          <span className="text-lg">Today</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
