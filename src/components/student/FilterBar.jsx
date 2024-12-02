import { LuFilter } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import StudentImg from "../../assets/studentImg.png";
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";
import StudentFilterModel from "./forms/StudentFilterModel";

const FilterBar = () => {
  const { showStudentFilter, setShowStudentFilter } = useContext(MyContext);
  const filterStudent = ["Department", "Course", "Session", "Batch"];

  return (
    <>
      <div className="flex items-center gap-4 p-4 w-full">
        <div className="w-full relative">
          <input
            type="text"
            placeholder="Search Student..."
            className="pl-12 py-2 rounded-lg w-full"
          />
          <div className="absolute left-0 h-full w-10 inline-block text-2xl">
            <IoSearch className="mx-auto mt-2" />
          </div>
        </div>
        {filterStudent.map((filter, index) => (
          <button
            key={index}
            className="flex items-center justify-between gap-5 rounded-3xl bg-[#01569C] text-white shadow w-1/5"
          >
            <div className="w-6 h-6 rounded-full border-2 border-white m-1 flex justify-center items-center bg-white">
              <img src={StudentImg} alt="" className="w-5 h-5 rounded-full" />
            </div>
            <div className="flex justify-center items-center text-sm gap-3 m-1">
              {filter}
              <span className="text-blue-500 text-xl font-bold bg-white h-5 w-5 rounded-full flex justify-center items-center mr-2">
                <RxCross2 />
              </span>
            </div>
          </button>
        ))}
        <div className="text-3xl">
          <LuFilter onClick={() => setShowStudentFilter(true)} />
        </div>
      </div>
      {/* Filter Form Bar  */}
      {showStudentFilter ? <StudentFilterModel /> : ""}
    </>
  );
};

export default FilterBar;
