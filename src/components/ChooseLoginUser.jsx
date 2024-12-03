import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import { FaSchool } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { BsBank } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { BsHousesFill } from "react-icons/bs";
import { IoLibrary } from "react-icons/io5";
import { MdEmojiTransportation } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import DepartmentCard from "./DepartmentCard";

const ChooseLoginUser = () => {
  const { showChooseLoginUser, setShowChooseLoginUser } = useContext(MyContext);

  const departments = [
    { name: "Admission", role: "UI/UX Designer", icon: <FaSchool /> },
    {
      name: "Student",
      role: "UI/UX Designer",
      icon: <PiStudentFill />,
      user: "student",
    },
    { name: "Finance", role: "Copywriter", icon: <BsBank />, user: "finance" },
    { name: "Faculty", role: "Copywriter", icon: <BsPeopleFill /> },
    { name: "Hostel", role: "IOS Developer", icon: <BsHousesFill /> },
    { name: "Library", role: "UI/UX Designer", icon: <IoLibrary /> },
    { name: "Transport", role: "Copywriter", icon: <MdEmojiTransportation /> },
    { name: "HRM", role: "UI/UX Designer", icon: <GrUserManager /> },
  ];
  return (
    <section
      style={{ backdropFilter: "blur(5px)" }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 "
    >
      <div className="flex justify-between gap-6 min-h-[70%] w-[60%]">
        <div className="w-full p-4 bg-white rounded-[10px] shadow-sm relative">
          <h2 className="font-medium text-lg">Login</h2>
          <button
            onClick={() => setShowChooseLoginUser(false)}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            ✖
          </button>
          {/* Scrollable container */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 max-h-[400px] overflow-y-auto scrollbar-none scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            {departments.map((department, index) => (
              <DepartmentCard key={index} {...department} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseLoginUser;
