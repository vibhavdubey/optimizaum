import { useContext, useState } from "react";
import { MyContext } from "../../../context/MyContext";

const AddNewStudent = () => {
  const { showAddNewStudent, setShowAddNewStudent } = useContext(MyContext);
  const [formData, setFormData] = useState({
    department: "",
    course: "",
    session: "",
    batch: "",
    studentName: "",
    fatherName: "",
    motherName: "",
    email: "",
    contactNumber: "",
    alternateContactNumber: "",
    dob: "",
    gender: "",
    category: "",
    religion: "",
    correspondenceAddress: "",
    correspondenceState: "",
    correspondenceCity: "",
    correspondencePincode: "",
    isPermanentSame: false,
    permanentAddress: "",
    permanentState: "",
    permanentCity: "",
    permanentPincode: "",
    admissionDate: "",
    enrollmentNumber: "",
    rollNumber: "",
    aadharNumber: "",
    panNumber: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    if (name === "isPermanentSame" && checked) {
      setFormData((prevState) => ({
        ...prevState,
        permanentAddress: prevState.correspondenceAddress,
        permanentState: prevState.correspondenceState,
        permanentCity: prevState.correspondenceCity,
        permanentPincode: prevState.correspondencePincode,
      }));
    }
  };

  const [isPublished, setIsPublished] = useState(false);

  const handleToggle = () => {
    setIsPublished(!isPublished);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <div
      style={{ backdropFilter: "blur(5px)" }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-20"
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 relative">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Add new student
        </h2>
        <button
          onClick={() => setShowAddNewStudent(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          ✖
        </button>
        <div className="max-h-[500px] overflow-y-auto pr-2">
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Department */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Department
              </label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Department</option>
                <option value="science">Science</option>
                <option value="arts">Arts</option>
              </select>
            </div>

            {/* Course */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Course
              </label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Course</option>
                <option value="mathematics">Mathematics</option>
                <option value="history">History</option>
              </select>
            </div>

            {/* Session */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Session
              </label>
              <select
                name="session"
                value={formData.session}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Session</option>
                <option value="2021-2022">2021-2022</option>
                <option value="2022-2023">2022-2023</option>
              </select>
            </div>

            {/* Batch */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Batch
              </label>
              <select
                name="batch"
                value={formData.batch}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Batch</option>
                <option value="batchA">Batch A</option>
                <option value="batchB">Batch B</option>
              </select>
            </div>

            {/* Other Inputs */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Student Name
              </label>
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                placeholder="Enter Student Name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Father's Name
              </label>
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                placeholder="Enter Father's Name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mother's Name
              </label>
              <input
                type="text"
                name="motherName"
                value={formData.motherName}
                onChange={handleChange}
                placeholder="Enter Mother's Name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Student Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Student Contact Number
              </label>
              <input
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="Enter Contact Number"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Student Alternate Contact Number
              </label>
              <input
                type="text"
                name="alternateContactNumber"
                value={formData.alternateContactNumber}
                onChange={handleChange}
                placeholder="Enter Alternate Contact Number"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* --------------------------------------- */}

            {/* Student DOB and Gender */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Student DOB
                </label>
                <input
                  type="date"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Student Gender
                </label>
                <div className="mt-1 flex space-x-4">
                  <button
                    type="button"
                    className="w-full py-2 px-4 rounded-md bg-green-500 text-white hover:bg-green-600"
                  >
                    Male
                  </button>
                  <button
                    type="button"
                    className="w-full py-2 px-4 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300"
                  >
                    Female
                  </button>
                  <button
                    type="button"
                    className="w-full py-2 px-4 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300"
                  >
                    Other
                  </button>
                </div>
              </div>
            </div>

            {/* Category and Religion */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <input
                  type="text"
                  placeholder="Enter Student Name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Religion
                </label>
                <input
                  type="text"
                  placeholder="Enter Student Name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Address Fields */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address 1
              </label>
              <input
                type="text"
                placeholder="Enter Student Name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address 2
              </label>
              <input
                type="text"
                placeholder="Enter Student Name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* State, City, and Pin Code */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  State
                </label>
                <input
                  type="text"
                  placeholder="Select Time"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  placeholder="Select Time"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Pin code
                </label>
                <input
                  type="text"
                  placeholder="Select Time"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Checkbox for Permanent Address */}
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label className="text-sm font-medium text-gray-700">
                Permanent Address Same as Correspondence Address
              </label>
            </div>

            {/* Permanent Address Fields */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address 1
              </label>
              <input
                type="text"
                placeholder="Enter Student Name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address 2
              </label>
              <input
                type="text"
                placeholder="Enter Student Name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* State, City, and Pin Code */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  State
                </label>
                <input
                  type="text"
                  placeholder="Select Time"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  placeholder="Select Time"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Pin code
                </label>
                <input
                  type="text"
                  placeholder="Select Time"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* ------------------------- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Admission Date
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Admission/Enrollment Number
                </label>
                <input
                  type="text"
                  placeholder="Admission Number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Roll Number
                </label>
                <input
                  type="text"
                  placeholder="Enter Roll Number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* <!-- Second Row --> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Aadhar Number
                </label>
                <input
                  type="text"
                  placeholder="Enter"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  PAN Number
                </label>
                <input
                  type="text"
                  placeholder="Enter"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* ----------------- class 10 -------------------- */}

            <div className="flex items-center w-[30%] mb-4 bg-[#01579D] text-white rounded-3xl p-1">
              <span>
                <img
                  src="https://via.placeholder.com/40"
                  alt="Profile"
                  className="w-6 h-6 rounded-full mr-2"
                />
              </span>
              <button className=" text-white ">Class 10th</button>
            </div>

            {/* Input Fields */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Qualification
              </label>
              <input
                type="text"
                placeholder="Enter Student Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Board/University Name
              </label>
              <input
                type="text"
                placeholder="Enter Student Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Year, Marks, and Subject */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Year
                </label>
                <input
                  type="text"
                  placeholder="Select Time"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Maximum Marks
                </label>
                <input
                  type="text"
                  placeholder="Select Time"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Maximum Obtained
                </label>
                <input
                  type="text"
                  placeholder="Select Time"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Select Time"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* ----------------- class 12 -------------------- */}

            <div className="flex items-center w-[30%] mb-4 bg-[#01579D] text-white rounded-3xl p-1">
              <span>
                <img
                  src="https://via.placeholder.com/40"
                  alt="Profile"
                  className="w-6 h-6 rounded-full mr-2"
                />
              </span>
              <button className=" text-white ">Class 12th</button>
            </div>

            {/* Input Fields */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Qualification
              </label>
              <input
                type="text"
                placeholder="Enter Student Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Board/University Name
              </label>
              <input
                type="text"
                placeholder="Enter Student Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Year, Marks, and Subject */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Year
                </label>
                <input
                  type="text"
                  placeholder="Select Time"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Maximum Marks
                </label>
                <input
                  type="text"
                  placeholder="Select Time"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Maximum Obtained
                </label>
                <input
                  type="text"
                  placeholder="Select Time"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Select Time"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* ----------------- graduation -------------------- */}

            <div className="flex items-center w-[30%] mb-4 bg-[#01579D] text-white rounded-3xl p-1">
              <span>
                <img
                  src="https://via.placeholder.com/40"
                  alt="Profile"
                  className="w-6 h-6 rounded-full mr-2"
                />
              </span>
              <button className=" text-white ">Graduation</button>
            </div>

            {/* Input Fields */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Qualification
              </label>
              <input
                type="text"
                placeholder="Enter Student Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Board/University Name
              </label>
              <input
                type="text"
                placeholder="Enter Student Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Year, Marks, and Subject */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Year
                </label>
                <input
                  type="text"
                  placeholder="Select Time"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Maximum Marks
                </label>
                <input
                  type="text"
                  placeholder="Select Time"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Maximum Obtained
                </label>
                <input
                  type="text"
                  placeholder="Select Time"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Select Time"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="flex justify-between items-center px-5">
              <div className="flex items-center justify-between mx-auto p-2 bg-blue-50 rounded-lg shadow-md w-[50%]">
                {/* Toggle Section */}
                <div className="flex items-center justify-between w-full">
                  <label className="text-gray-700 text-sm font-semibold mr-4">
                    Want to Publish
                  </label>
                  <div
                    onClick={handleToggle}
                    className={`relative w-12 h-6 rounded-full cursor-pointer transition-colors ${
                      isPublished ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                        isPublished ? "translate-x-6" : "translate-x-0"
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
              {/* Submit Button */}
              <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewStudent;
