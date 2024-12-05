import axios from "axios";
import { useContext, useState } from "react";
import { MyContext } from "../../../context/MyContext";

const AddNewDepartment = () => {
  const {
    showAddNewDepartment,
    setShowAddNewDepartment,
    API_BASE_URL,
    getAllStudentDepartment,
  } = useContext(MyContext);

  const [departmentName, setDepartmentName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData to include file upload
    const formData = new FormData();
    formData.append("departmentName", departmentName);
    formData.append("description", description);
    if (image) {
      formData.append("departmentImage", image);
    }

    axios
      .post(`${API_BASE_URL}/student-management/departments`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log("Response:", response.data);
        alert("Department added successfully!");

        // Reset form fields
        setDepartmentName("");
        setDescription("");
        setImage(null);

        // Close form modal
        setShowAddNewDepartment(false);
        getAllStudentDepartment();
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to add department. Please try again.");
      });
  };

  return (
    <div
      style={{ backdropFilter: "blur(5px)" }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50"
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          aria-label="Close"
          onClick={() => setShowAddNewDepartment(false)}
        >
          ✖
        </button>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Add New Department
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Department Image */}
          <div>
            <label
              htmlFor="departmentImage"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Department Image
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

          {/* Department Name */}
          <div>
            <label
              htmlFor="departmentName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Department Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="departmentName"
              value={departmentName}
              onChange={(e) => setDepartmentName(e.target.value)}
              placeholder="Enter department name"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            />
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

export default AddNewDepartment;
