import { HiDotsVertical } from "react-icons/hi";
import Images from "../../assets/studentImg.png";
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";
import axios from "axios";
import UpdateStudent from "./forms/UpdateStudent";
import StudentProfile from "./StudentProfile";

const StudentTable = ({
  id,
  name,
  email,
  num,
  gender,
  birthday,
  contact,
  roll,
  course,
  status,
}) => {
  const {
    showUpdateStudent,
    setShowUpdateStudent,
    setStudentDataId,
    API_BASE_URL,
    showStudentProfile,
    setShowStudentProfile,
  } = useContext(MyContext);

  const handleUpdate = (id) => {
    console.log("handle update -->", id);

    setStudentDataId(id);
    setShowUpdateStudent(true);
  };

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure , you want to delete ?");
    if (confirm) {
      axios
        .delete(`${API_BASE_URL}/students/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          console.log(response);
          alert("Student deleted Successfully.");
        })
        .catch((error) => {
          console.log(error);
          alert("Error while deleting Student.");
        });
    }
  };

  const handleProfile = (id) => {
    setStudentDataId(id);
    setShowStudentProfile(true);
  };

  return (
    <div className="hover:bg-gray-50 rounded-[15px] flex justify-between items-center my-2 bg-white w-full shadow-sm">
      <div className="flex justify-between items-center w-[90%]">
        <div className="p-4 flex items-center gap-2">
          <img src={Images} alt="avatar" className="w-14 h-14 rounded-full" />
        </div>

        <div>
          <p className="text-base">{name}</p>
          <p className="text-sm text-gray-500">{email}</p>
        </div>

        <div className="border-l-2 border-b-2 border-violet-600 border-t-violet-300 border-r-violet-300 rounded-full px-2 py-1">
          <p className="text-violet-600 text-base">{num}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Gender</p>
          <p className="text-base">{gender}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Birthday</p>
          <p className="text-base">{birthday}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Contact Number</p>
          <p className="text-base">{contact}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Roll Number</p>
          <p className="text-base">{roll}</p>
        </div>

        <div className="h-12 flex items-end ">
          <p className="text-sm font-semibold text-gray-500 border-2 border-gray-600 rounded-[4px] px-1 ">
            {course}
          </p>
        </div>
      </div>
      {/* <p>
        <span
          className={`px-4 py-2 rounded text-sm ${
            item.status === "Draft"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-green-100 text-green-800"
          }`}
        >
          {status}
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
      <div>{showUpdateStudent ? <UpdateStudent /> : null}</div>
      <div>{showStudentProfile ? <StudentProfile /> : null}</div>
    </div>
  );
};

export default StudentTable;
