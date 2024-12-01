import { IoCalendarClearOutline } from "react-icons/io5";
import { SlBell } from "react-icons/sl";
import StudentImg from "../../assets/studentImg.png";
import { RiFileExcel2Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";
import AddNewDepartment from "./forms/AddNewDepartment";
import AddNewCourse from "./forms/AddNewCourse";
import AddNewSession from "./forms/AddNewSession";
import AddNewBatch from "./forms/AddNewBatch";
import AddNewStudent from "./forms/AddNewStudent";
const StudentHeader = () => {
  const {
    showAddNewStudent,
    setShowAddNewStudent,
    showAddNewDepartment,
    setShowAddNewDepartment,
    showAddNewCourse,
    setShowAddNewCourse,
    showAddNewSession,
    setShowAddNewSession,
    showAddNewBatch,
    setShowAddNewBatch,
  } = useContext(MyContext);

  const { pathname } = useLocation();
  // console.log("---->", pathname);

  return (
    <div className="flex justify-between items-center p-4">
      <div className="mb-3">
        <p className="text-base text-gray-400 mb-2">
          Powered by AppMingle Media
        </p>
        <h1 className="text-3xl font-semibold">
          {pathname === "/student-dashboard" ? "Student Dashboard" : ""}
          {pathname === "/student" ? "All Students" : ""}
          {pathname === "/student-department" ? "Department" : ""}
          {pathname === "/student-course" ? "Course" : ""}
          {pathname === "/student-session" ? "Session" : ""}
          {pathname === "/student-batch" ? "Batch" : ""}
          {pathname === "/student-chat" ? "Chat" : ""}
          {pathname === "/student-info-portal" ? "Info Portal" : ""}
        </h1>
      </div>
      <div className=" flex flex-col justify-end gap-5 w-[40%]">
        <div className="flex justify-end gap-4">
          <button className="flex justify-start gap-3 items-center w-[50%] px-3 py-2 bg-gray-300 rounded-lg">
            <span className="text-xl font-extrabold">
              <IoCalendarClearOutline />
            </span>
            <span className="text-lg">Today</span>
          </button>
          <button className="px-3 py-2 bg-white rounded-lg text-xl font-bold">
            <SlBell />
          </button>
          <button className="flex justify-start items-center gap-2 rounded-lg px-3 py-2 w-[40%] bg-white">
            <img src={StudentImg} alt="" className="w-8 h-8 rounded-full" />
            <span className="text-lg font-semibold">College Name</span>
          </button>
        </div>

        {pathname === "/student" ? (
          <div className="flex items-center justify-end gap-4">
            <button className="bg-green-500 text-white px-3 py-2 rounded-lg w-[40%] flex items-center gap-2">
              <span className="text-2xl">
                <RiFileExcel2Line />
              </span>
              Download Excel
            </button>
            <button
              onClick={() => setShowAddNewStudent(true)}
              className="bg-blue-500 text-white px-3 py-2 rounded-lg w-[40%] flex items-center gap-2"
            >
              <span className="text-2xl">
                <FaPlus />
              </span>
              Add New Student
            </button>
          </div>
        ) : (
          ""
        )}
        {/* add student form  */}
        {showAddNewStudent ? <AddNewStudent /> : ""}
        {pathname === "/student-department" ? (
          <div className="flex items-center justify-end gap-4">
            <button
              onClick={() => setShowAddNewDepartment(true)}
              className="bg-blue-500 text-white px-3 py-2 rounded-lg flex items-center gap-2"
            >
              <span className="text-2xl">
                <FaPlus />
              </span>
              Add New Department
            </button>
          </div>
        ) : (
          ""
        )}
        {/* add department form  */}
        {showAddNewDepartment ? <AddNewDepartment /> : ""}

        {pathname === "/student-course" ? (
          <div className="flex items-center justify-end gap-4">
            <button
              onClick={() => setShowAddNewCourse(true)}
              className="bg-blue-500 text-white px-3 py-2 rounded-lg flex items-center gap-2"
            >
              <span className="text-2xl">
                <FaPlus />
              </span>
              Add New Courses
            </button>
          </div>
        ) : (
          ""
        )}
        {/* add new course form  */}
        {showAddNewCourse ? <AddNewCourse /> : ""}
        {pathname === "/student-session" ? (
          <div className="flex items-center justify-end gap-4">
            <button
              onClick={() => setShowAddNewSession(true)}
              className="bg-blue-500 text-white px-3 py-2 rounded-lg flex items-center gap-2"
            >
              <span className="text-2xl">
                <FaPlus />
              </span>
              Add New Session
            </button>
          </div>
        ) : (
          ""
        )}
        {/* add new session form  */}
        {showAddNewSession ? <AddNewSession /> : ""}
        {pathname === "/student-batch" ? (
          <div className="flex items-center justify-end gap-4">
            <button
              onClick={() => setShowAddNewBatch(true)}
              className="bg-blue-500 text-white px-3 py-2 rounded-lg flex items-center gap-2"
            >
              <span className="text-2xl">
                <FaPlus />
              </span>
              Add New Batch
            </button>
          </div>
        ) : (
          ""
        )}
        {/* add new batch form  */}
        {showAddNewBatch ? <AddNewBatch /> : ""}
      </div>
    </div>
  );
};

export default StudentHeader;
