import { HiDotsVertical } from "react-icons/hi";
// import Images from "../../assets/studentImg.png";
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";
import UpdateCourse from "./forms/UpdateCourse";
import axios from "axios";
const CourseTable = ({
  id,
  department,
  courseName,
  courseImage,
  description,

  session,
  students,
  course,
}) => {
  const {
    showUpdateCourse,
    setShowUpdateCourse,
    API_BASE_URL,
    setStudentCourseDataId,
    getAllStudentCourse,
  } = useContext(MyContext);

  const handleUpdate = (id) => {
    setStudentCourseDataId(id);
    setShowUpdateCourse(true);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this department?"
    );

    if (!confirmDelete) return;

    axios
      .delete(`${API_BASE_URL}/student-management/courses/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);

        alert("Course deleted");
        getAllStudentCourse();
      })
      .catch((error) => {
        console.log(error);
        alert("Error while deleting course");
      });
  };

  const handleProfile = (id) => {};

  return (
    <div className="hover:bg-gray-50 rounded-[15px] flex justify-around items-center my-2 bg-white shadow-sm">
      <div className="p-4 flex items-center gap-2">
        <img
          src={`${API_BASE_URL}/uploads/${courseImage}`}
          alt="avatar"
          className="w-14 h-14 rounded-full"
        />
      </div>
      <div>
        <p className="text-base">{courseName ? courseName : "---"}</p>
        <p className="text-sm text-gray-500">
          {description ? description : "---"}
        </p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Department</p>
        <p className="text-base">{department ? department : "---"}</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Session</p>
        <p className="text-base">{session ? session : "---"}</p>
      </div>
      {/* <div>
        <p className="text-sm text-gray-500">Batch</p>
        <p className="text-base">{item?.batch}</p>
      </div> */}
      <div>
        <p className="text-sm text-gray-500">Students</p>
        <p className="text-base">{students ? students : "---"}</p>
      </div>

      <div className="h-12 flex items-end ">
        <p className="text-sm font-semibold text-gray-500 border-2 border-gray-600 rounded-[4px] px-1 ">
          {course ? course : "---"}
        </p>
      </div>

      {/* <p>
        <span
          className={`px-4 py-2 rounded text-sm ${
            item.status === "Draft"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-green-100 text-green-800"
          }`}
        >
          {item?.status}
        </span>
      </p> */}

      <div className="group relative">
        <button className="text-black flex flex-col gap-2 bg-[#F5F8FD] p-3 rounded-[10px]">
          <HiDotsVertical />
        </button>
        <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-40">
          <div className="bg-[#F5F8FD] shadow-2xl rounded-[10px] p-1 flex flex-col justify-center items-center gap-2 px-3 py-2 ">
            <button
              className="px-4 py-2 bg-[#E1F8F2] text-green-800 rounded-[10px]"
              onClick={() => handleUpdate(id)}
            >
              Update
            </button>
            <button
              className="px-4 py-2 bg-[#F8E0E1] text-red-800 rounded-[10px]"
              onClick={() => handleDelete(id)}
            >
              Delete
            </button>
            <button
              className="px-4 py-2 bg-[#988CFF] text-violet-800 rounded-[10px]"
              onClick={() => handleProfile(id)}
            >
              Profile
            </button>
          </div>
        </div>
      </div>
      <div>{showUpdateCourse ? <UpdateCourse /> : null}</div>
    </div>
  );
};

export default CourseTable;
