import React, { useContext, useState } from "react";
import { MyContext } from "../../../context/MyContext";

const AddNewCourse = () => {
  const { showAddNewCourse, setShowAddNewCourse } = useContext(MyContext);
  const [department, setDepartment] = useState("");
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ department, courseName, description, image });
    // Add your form submission logic here
  };

  return (
    <div
      style={{ backdropFilter: "blur(5px)" }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50"
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button
          onClick={() => setShowAddNewCourse(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          ✖
        </button>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Add New Courses
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
              placeholder="Enter course name"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Course Image */}
          <div>
            <label
              htmlFor="departmentImage"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Course Image
            </label>
            <div className="flex items-center border border-gray-300 rounded-md p-2">
              <input
                type="file"
                id="departmentImage"
                className="hidden"
                onChange={handleImageUpload}
              />
              <label
                htmlFor="departmentImage"
                className="flex-grow cursor-pointer text-gray-500"
              >
                {image ? image.name : "Upload Image"}
              </label>
              <button
                type="button"
                className="p-2 bg-gray-200 rounded-md hover:bg-gray-300"
                aria-label="Upload"
              >
                ⬆️
              </button>
            </div>
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add some description of the request"
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

export default AddNewCourse;
