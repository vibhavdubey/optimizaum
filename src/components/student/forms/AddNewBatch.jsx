import React, { useContext, useState } from "react";
import { MyContext } from "../../../context/MyContext";

const AddNewBatch = () => {
  const { showAddNewBatch, setShowAddNewBatch } = useContext(MyContext);
  const [department, setDepartment] = useState("");
  const [courseName, setCourseName] = useState("");
  const [session, setSession] = useState("");
  const [batch, setBatch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ department, courseName, session });
    // Add your form submission logic here
  };
  return (
    <div
      style={{ backdropFilter: "blur(5px)" }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50"
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button
          onClick={() => setShowAddNewBatch(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          ✖
        </button>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Add New Batch
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
              <option value="department1">Department 1</option>
              <option value="department2">Department 2</option>
              <option value="department3">Department 3</option>
            </select>
          </div>

          {/* Course Name */}
          <div>
            <label
              htmlFor="courseName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Course Name
            </label>
            <input
              type="text"
              id="courseName"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              placeholder="Enter department name"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            />
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

          <div>
            <label
              htmlFor="batch"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Batch
            </label>
            <input
              type="text"
              id="batch"
              value={batch}
              onChange={(e) => setBatch(e.target.value)}
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

export default AddNewBatch;
