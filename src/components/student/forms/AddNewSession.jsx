import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../../context/MyContext";
import axios from "axios";

const AddNewSession = () => {
  const {
    showAddNewSession,
    setShowAddNewSession,
    getAllStudentDepartment,
    studentDepartmentDatas,
    API_BASE_URL,
    getAllStudentSession,
  } = useContext(MyContext);

  const [department, setDepartment] = useState("");
  const [course, setCourse] = useState("");
  const [session, setSession] = useState("");
  const [filterCourse, setFilterCourse] = useState([]);

  useEffect(() => {
    getAllStudentDepartment();
  }, [API_BASE_URL]);

  // console.log(studentDepartmentDatas);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/courses-by-department/${department}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((result) => {
        console.log(result);
        setFilterCourse(result.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [department]);
  console.log(filterCourse);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the data object
    const data = {
      department,
      course,
      session,
    };

    // Make the POST request
    axios
      .post(`${API_BASE_URL}/student-management/sessions`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log("Session added successfully:", response.data);
        alert("Session added successfully!");
        setShowAddNewSession(false); // Close the modal on success
        getAllStudentSession();
      })
      .catch((error) => {
        console.error("Error adding session:", error);
        alert("Failed to add session. Please try again.");
      });
  };

  return (
    <div
      style={{ backdropFilter: "blur(5px)" }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 overflow-y-auto z-50"
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button
          onClick={() => setShowAddNewSession(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          ✖
        </button>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Add New Session
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Department Dropdown */}
          <div>
            <label
              htmlFor="department"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Department
            </label>
            <select
              id="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="" disabled>
                Select Department
              </option>
              {studentDepartmentDatas &&
                studentDepartmentDatas.map((item, index) => (
                  <option value={item._id} key={index}>
                    {item?.departmentName}
                  </option>
                ))}
            </select>
          </div>

          {/* Course Dropdown */}
          <div>
            <label
              htmlFor="department"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Course
            </label>
            <select
              id="department"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="" disabled>
                Select Course
              </option>
              {filterCourse &&
                filterCourse.map((item, index) => (
                  <option value={item._id} key={index}>
                    {item?.courseName}
                  </option>
                ))}
            </select>
          </div>

          {/* Session */}
          <div>
            <label
              htmlFor="session"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Session
            </label>
            <input
              type="text"
              id="session"
              value={session}
              onChange={(e) => setSession(e.target.value)}
              placeholder="YYYY"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md shadow hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewSession;
