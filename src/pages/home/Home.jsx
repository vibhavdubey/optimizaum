import Header from "../../components/Header";
import DepartmentCard from "../../components/DepartmentCard";
import UpcomingHolidays from "../../components/UpcomingHolidays";
import { HiArrowRight } from "react-icons/hi";
import { FaSchool } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { BsBank } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { BsHousesFill } from "react-icons/bs";
import { IoLibrary } from "react-icons/io5";
import { MdEmojiTransportation } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";
import ChooseLoginUser from "../../components/ChooseLoginUser";

const Home = () => {
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
    <div className="min-h-screen bg-[#F2F9FC]">
      <Header />
      <main className="p-6">
        <section className="flex justify-between gap-6 min-h-[80%]">
          <div className="w-full p-4 bg-white rounded-[10px] shadow-sm">
            <h2 className="font-medium text-lg">Login</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {departments.slice(0, 6).map((department, index) => (
                <DepartmentCard key={index} {...department} />
              ))}
            </div>
            <div className="my-3 flex justify-end items-center">
              <p
                onClick={() => setShowChooseLoginUser(true)}
                className="text-blue-500 flex justify-end items-center gap-3 px-2 text-base cursor-pointer hover:underline"
              >
                <span>view all</span>{" "}
                <span>
                  <HiArrowRight />
                </span>
              </p>
            </div>
            {showChooseLoginUser ? <ChooseLoginUser /> : ""}
          </div>
          <div className="w-[45%]">
            <UpcomingHolidays />
          </div>
        </section>
        {/* <section className="mt-6">
          <EmployeeList />
        </section> */}
      </main>
    </div>
  );
};

export default Home;
