import { HiDotsVertical } from "react-icons/hi";
// import Images from "../../assets/studentImg.png";
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";
import UpdateDepartment from "./forms/UpdateDepartment";
import axios from "axios";

const DepartmentTable = ({
  id,
  departmentImage,
  departmentName,
  description,
  courses,
  session,
  batch,
  students,
}) => {
  const {
    API_BASE_URL,
    setStudentDepartmentDataId,
    showUpdateDepartment,
    setShowUpdateDepartment,
    getAllStudentDepartment,
  } = useContext(MyContext);

  const handleUpdate = (id) => {
    setStudentDepartmentDataId(id);
    setShowUpdateDepartment(true);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this department?"
    );

    if (!confirmDelete) return;

    axios
      .delete(`${API_BASE_URL}/student-management/departments/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);

        alert("Department deleted");
        getAllStudentDepartment();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleProfile = (id) => {};

  return (
    <div className="hover:bg-gray-50 rounded-[15px] flex justify-between w-full items-center my-2 bg-white shadow-sm">
      <div className="grid grid-cols-3 md:grid-cols-6  items-center w-[85%]">
        <div className="p-4 flex items-center gap-2">
          <img
            src={`${API_BASE_URL}/uploads/${departmentImage}`}
            alt="avatar"
            className="w-14 h-14 rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-base">{departmentName ? departmentName : "---"}</p>
          <p className="text-sm text-gray-500">
            {description ? `${description.slice(0, 30)}...` : "---"}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-500">Courses</p>
          <p className="text-base text-center">{courses ? courses : "---"}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-500">Session</p>
          <p className="text-base text-center">{session ? session : "---"}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-500">Batch</p>
          <p className="text-base text-center">{batch ? batch : "---"}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-500">Students</p>
          <p className="text-base text-center">{students ? students : "---"}</p>
        </div>
      </div>

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
              onClick={handleProfile}
            >
              View
            </button>
          </div>
        </div>
      </div>
      <div>{showUpdateDepartment ? <UpdateDepartment /> : null}</div>
    </div>
  );
};

export default DepartmentTable;
