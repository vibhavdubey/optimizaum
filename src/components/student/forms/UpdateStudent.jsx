import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../../context/MyContext";

const UpdateStudent = () => {
  const {
    API_BASE_URL,
    studentDepartmentDatas,
    getAllStudentDepartment,
    getAllStudentSession,
    studentSessionDatas,

    showUpdateStudent,
    setShowUpdateStudent,
    studentDataId,
    getSingleStudent,
    singleStudentDatas,
  } = useContext(MyContext);

  // console.log(studentDataId);

  const [courseData, setCourseData] = useState([]);

  // Individual state variables
  const [academicDetails, setAcademicDetails] = useState({
    department: "", // ID reference
    course: "", // ID reference
    session: "", // ID reference
  });

  const [personalDetails, setPersonalDetails] = useState({
    studentName: "",
    fatherName: "",
    motherName: "",
    email: "",
    mobile: "",
    alternateMobile: null,
    dob: "", // Ensure format matches the backend expectation (e.g., YYYY-MM-DD)
    gender: "", // Male, Female, or Other
    category: "", // General, SC, ST, OBC
    religion: "", // Hindu, Muslim, Christian, Sikh, Other
  });

  const [correspondenceAddress, setCorrespondenceAddress] = useState({
    address1: "",
    address2: null,
    state: "",
    city: "",
    pincode: "",
  });

  const [permanentAddress, setPermanentAddress] = useState({
    address1: "",
    address2: null,
    state: "",
    city: "",
    pincode: "",
  });

  const [qualificationDetails, setQualificationDetails] = useState({
    _10th: {
      qualification: "",
      boardUniversity: "",
      year: "",
      maxMark: null,
      obtainMark: null,
      subject: "",
    },
    _12th: {
      qualification: "",
      boardUniversity: "",
      year: "",
      maxMark: null,
      obtainMark: null,
      subject: "",
    },
    graduation: {
      qualification: "",
      boardUniversity: "",
      year: "",
      maxMark: null,
      obtainMark: null,
      subject: "",
    },
  });

  const [documents, setDocuments] = useState({
    aadharFront: "",
    aadharBack: "",
    photo: "",
    signature: "",
    class10: "",
    class12: "",
    graduation: "",
    diploma: "",
    incomeCertificate: "",
    domicileCertificate: "",
  });

  const [registrationDetail, setRegistrationDetail] = useState({
    admissionNumber: "",
    aadharNumber: "",
    admissionDate: "",
    panNumber: "",
    rollNumber: "",
  });
  //  -------------------------------------------------------------------------------------------
  const updateAcademicDetails = (field, value) => {
    setAcademicDetails((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  // Usage:
  // updateAcademicDetails("department", "64a9d3f5e3b");

  const updatePersonalDetails = (field, value) => {
    setPersonalDetails((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  // Usage:
  // updatePersonalDetails("studentName", "John Doe");

  const updateCorrespondenceAddress = (field, value) => {
    setCorrespondenceAddress((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  // Usage Example:
  // updateCorrespondenceAddress("address1", "123 Main Street");
  // updateCorrespondenceAddress("state", "California");

  const updatePermanentAddress = (field, value) => {
    setPermanentAddress((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  // Usage Example:
  // updatePermanentAddress("city", "Los Angeles");
  // updatePermanentAddress("pincode", "90001");

  const updateQualificationDetails = (section, field, value) => {
    setQualificationDetails((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [field]: value,
      },
    }));
  };

  // Usage Example:
  // updateQualificationDetails("_10th", "boardUniversity", "CBSE");
  // updateQualificationDetails("_12th", "year", "2020");
  // updateQualificationDetails("graduation", "maxMark", 1000);

  const updateDocuments = (field, value) => {
    setDocuments((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const updateRegistrationDetail = (field, value) => {
    setRegistrationDetail((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  // Usage Example:
  // updateDocuments("aadharFront", "path/to/aadhar-front.jpg");
  // updateDocuments("photo", "path/to/photo.jpg");

  const [isPublished, setIsPublished] = useState(false);

  const handleToggle = () => {
    setIsPublished(!isPublished);
  };

  // getting single Student data
  useEffect(() => {
    getSingleStudent(studentDataId);
    // setAcademicDetails(singleStudentDatas?.academicDetails?.department);
    if (singleStudentDatas) {
      setAcademicDetails({
        department: singleStudentDatas.academicDetails?.department?._id || "",
        course: singleStudentDatas.academicDetails?.course?._id || "",
        session: singleStudentDatas.academicDetails?.session?._id || "",
      });

      setPersonalDetails({
        studentName: singleStudentDatas.personalDetails?.studentName || "",
        fatherName: singleStudentDatas.personalDetails?.fatherName || "",
        motherName: singleStudentDatas.personalDetails?.motherName || "",
        email: singleStudentDatas.personalDetails?.email || "",
        mobile: singleStudentDatas.personalDetails?.mobile || "",
        alternateMobile:
          singleStudentDatas.personalDetails?.alternateMobile || null,
        dob: singleStudentDatas.personalDetails?.dob || "",
        gender: singleStudentDatas.personalDetails?.gender || "",
        category: singleStudentDatas.personalDetails?.category || "",
        religion: singleStudentDatas.personalDetails?.religion || "",
      });

      setCorrespondenceAddress({
        address1: singleStudentDatas.correspondenceAddress?.address1 || "",
        address2: singleStudentDatas.correspondenceAddress?.address2 || null,
        state: singleStudentDatas.correspondenceAddress?.state || "",
        city: singleStudentDatas.correspondenceAddress?.city || "",
        pincode: singleStudentDatas.correspondenceAddress?.pincode || "",
      });

      setPermanentAddress({
        address1: singleStudentDatas.permanentAddress?.address1 || "",
        address2: singleStudentDatas.permanentAddress?.address2 || null,
        state: singleStudentDatas.permanentAddress?.state || "",
        city: singleStudentDatas.permanentAddress?.city || "",
        pincode: singleStudentDatas.permanentAddress?.pincode || "",
      });

      setQualificationDetails({
        _10th: {
          qualification:
            singleStudentDatas.qualificationDetails?._10th?.qualification || "",
          boardUniversity:
            singleStudentDatas.qualificationDetails?._10th?.boardUniversity ||
            "",
          year: singleStudentDatas.qualificationDetails?._10th?.year || "",
          maxMark:
            singleStudentDatas.qualificationDetails?._10th?.maxMark || null,
          obtainMark:
            singleStudentDatas.qualificationDetails?._10th?.obtainMark || null,
          subject:
            singleStudentDatas.qualificationDetails?._10th?.subject || "",
        },
        _12th: {
          qualification:
            singleStudentDatas.qualificationDetails?._12th?.qualification || "",
          boardUniversity:
            singleStudentDatas.qualificationDetails?._12th?.boardUniversity ||
            "",
          year: singleStudentDatas.qualificationDetails?._12th?.year || "",
          maxMark:
            singleStudentDatas.qualificationDetails?._12th?.maxMark || null,
          obtainMark:
            singleStudentDatas.qualificationDetails?._12th?.obtainMark || null,
          subject:
            singleStudentDatas.qualificationDetails?._12th?.subject || "",
        },
        graduation: {
          qualification:
            singleStudentDatas.qualificationDetails?.graduation
              ?.qualification || "",
          boardUniversity:
            singleStudentDatas.qualificationDetails?.graduation
              ?.boardUniversity || "",
          year: singleStudentDatas.qualificationDetails?.graduation?.year || "",
          maxMark:
            singleStudentDatas.qualificationDetails?.graduation?.maxMark ||
            null,
          obtainMark:
            singleStudentDatas.qualificationDetails?.graduation?.obtainMark ||
            null,
          subject:
            singleStudentDatas.qualificationDetails?.graduation?.subject || "",
        },
      });

      setDocuments({
        aadharFront: singleStudentDatas.documents?.aadharFront || "",
        aadharBack: singleStudentDatas.documents?.aadharBack || "",
        photo: singleStudentDatas.documents?.photo || "",
        signature: singleStudentDatas.documents?.signature || "",
        class10: singleStudentDatas.documents?.class10 || "",
        class12: singleStudentDatas.documents?.class12 || "",
        graduation: singleStudentDatas.documents?.graduation || "",
        diploma: singleStudentDatas.documents?.diploma || "",
        incomeCertificate:
          singleStudentDatas.documents?.incomeCertificate || "",
        domicileCertificate:
          singleStudentDatas.documents?.domicileCertificate || "",
      });

      setRegistrationDetail({
        admissionNumber:
          singleStudentDatas.registrationDetail?.admissionNumber || "",
        aadharNumber: singleStudentDatas.registrationDetail?.aadharNumber || "",
        admissionDate:
          singleStudentDatas.registrationDetail?.admissionDate || "",
        panNumber: singleStudentDatas.registrationDetail?.panNumber || "",
        rollNumber: singleStudentDatas.registrationDetail?.rollNumber || "",
      });
    }
  }, []);

  useEffect(() => {
    getAllStudentDepartment(studentDataId);
  }, []);
  console.log(studentDepartmentDatas);

  useEffect(() => {
    console.log("first ==============>");
    axios
      .get(
        `${API_BASE_URL}/courses-by-department/${academicDetails.department}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((result) => {
        // console.log(result.data?.data);
        const data = result.data?.data;
        setCourseData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [academicDetails.department]);

  console.log("course data :", courseData);

  useEffect(() => {
    getAllStudentSession();
  }, []);
  console.log(studentSessionDatas);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      academicDetails,
      personalDetails,
      correspondenceAddress,
      permanentAddress,
      qualificationDetails,
      documents,
      registrationDetail,
    };

    axios
      .put(
        `${API_BASE_URL}/student-management/students/${studentDataId}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        console.log("Data updated successfully:", response.data);
        alert("Student Data Updated");
      })
      .catch((error) => {
        console.log(error);
        alert("Error while updating student data.");
      });
  };

  return (
    <div
      style={{ backdropFilter: "blur(5px)" }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50"
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 relative">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Update student
        </h2>
        <button
          onClick={() => setShowUpdateStudent(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          ✖
        </button>
        <div className="max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Department */}
            <h2 className="text-lg font-bold mt-6 mb-4"></h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Department
              </label>
              <select
                name="department"
                value={academicDetails.department}
                onChange={(e) =>
                  updateAcademicDetails("department", e.target.value)
                }
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Department</option>
                {studentDepartmentDatas &&
                  studentDepartmentDatas.map((item, idx) => (
                    <option value={item._id} key={idx}>
                      {item.departmentName}
                    </option>
                  ))}
              </select>
            </div>
            {/* Course */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Course
              </label>
              <select
                name="course"
                value={academicDetails.course}
                onChange={(e) =>
                  updateAcademicDetails("course", e.target.value)
                }
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Course</option>
                {courseData &&
                  courseData.map((item, idx) => (
                    <option value={item._id} key={idx}>
                      {item.courseName}
                    </option>
                  ))}
              </select>
            </div>
            {/* Session */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Session
              </label>
              <select
                name="session"
                value={academicDetails.session}
                onChange={(e) =>
                  updateAcademicDetails("session", e.target.value)
                }
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Session</option>
                {studentSessionDatas &&
                  studentSessionDatas.map((item, index) => (
                    <option value={item._id} key={index}>
                      {item.session}
                    </option>
                  ))}
              </select>
            </div>
            {/* ----------------------------------------------------------------------------------- */}
            {/* Other Inputs */}
            <h2 className="text-lg font-bold mt-6 mb-4">Personal Details</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Student Name
              </label>
              <input
                type="text"
                name="studentName"
                value={personalDetails.studentName}
                onChange={(e) =>
                  updatePersonalDetails("studentName", e.target.value)
                }
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
                value={personalDetails.fatherName}
                onChange={(e) =>
                  updatePersonalDetails("fatherName", e.target.value)
                }
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
                value={personalDetails.motherName}
                onChange={(e) =>
                  updatePersonalDetails("motherName", e.target.value)
                }
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
                value={personalDetails.email}
                onChange={(e) => updatePersonalDetails("email", e.target.value)}
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
                value={personalDetails.mobile}
                onChange={(e) =>
                  updatePersonalDetails("mobile", e.target.value)
                }
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
                value={personalDetails.alternateMobile}
                onChange={(e) =>
                  updatePersonalDetails("alternateMobile", e.target.value)
                }
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
                  value={personalDetails.dob}
                  onChange={(e) => updatePersonalDetails("dob", e.target.value)}
                />
              </div>

              {/* <div>
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
              </div> */}

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Student Gender
                </label>
                <div className="mt-1 flex space-x-4">
                  <label className="w-full">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      className="peer hidden"
                      onChange={(e) =>
                        updatePersonalDetails("gender", e.target.value)
                      }
                    />
                    <div className="py-2 px-4 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 peer-checked:bg-green-500 peer-checked:text-white peer-hover:bg-green-600 cursor-pointer">
                      Male
                    </div>
                  </label>
                  <label className="w-full">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      className="peer hidden"
                      onChange={(e) =>
                        updatePersonalDetails("gender", e.target.value)
                      }
                    />
                    <div className="py-2 px-4 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 peer-checked:bg-green-500 peer-checked:text-white peer-hover:bg-green-600 cursor-pointer">
                      Female
                    </div>
                  </label>
                  <label className="w-full">
                    <input
                      type="radio"
                      name="gender"
                      value="Other"
                      className="peer hidden"
                      onChange={(e) =>
                        updatePersonalDetails("gender", e.target.value)
                      }
                    />
                    <div className="py-2 px-4 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 peer-checked:bg-green-500 peer-checked:text-white peer-hover:bg-green-600 cursor-pointer">
                      Other
                    </div>
                  </label>
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
                  placeholder="Enter Category"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={personalDetails.category}
                  onChange={(e) =>
                    updatePersonalDetails("category", e.target.value)
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Religion
                </label>
                <input
                  type="text"
                  placeholder="Enter Religion"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={personalDetails.religion}
                  onChange={(e) =>
                    updatePersonalDetails("religion", e.target.value)
                  }
                />
              </div>
            </div>
            <h2 className="text-lg font-bold mt-6 mb-4">
              Correspondence Address
            </h2>
            {/* Address Fields */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address 1
              </label>
              <input
                type="text"
                placeholder="Enter Your Address"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={correspondenceAddress.address1}
                onChange={(e) =>
                  updateCorrespondenceAddress("address1", e.target.value)
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address 2
              </label>
              <input
                type="text"
                placeholder="Enter Your Address"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={correspondenceAddress.address2}
                onChange={(e) =>
                  updateCorrespondenceAddress("address2", e.target.value)
                }
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
                  placeholder="Select State"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={correspondenceAddress.state}
                  onChange={(e) =>
                    updateCorrespondenceAddress("state", e.target.value)
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  placeholder="Select City"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={correspondenceAddress.city}
                  onChange={(e) =>
                    updateCorrespondenceAddress("city", e.target.value)
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Pin code
                </label>
                <input
                  type="text"
                  placeholder="Enter Pin"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={correspondenceAddress.pincode}
                  onChange={(e) =>
                    updateCorrespondenceAddress("pincode", e.target.value)
                  }
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
            <h2 className="text-lg font-bold mt-6 mb-4">Permanent Address</h2>
            {/* Permanent Address Fields */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address 1
              </label>
              <input
                type="text"
                placeholder="Enter Your Address"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={permanentAddress.address1}
                onChange={(e) =>
                  updatePermanentAddress("address1", e.target.value)
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address 2
              </label>
              <input
                type="text"
                placeholder="Enter Your Address"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={permanentAddress.address2}
                onChange={(e) =>
                  updatePermanentAddress("address2", e.target.value)
                }
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
                  placeholder="Select State"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={permanentAddress.state}
                  onChange={(e) =>
                    updatePermanentAddress("state", e.target.value)
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  placeholder="Select City"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={permanentAddress.city}
                  onChange={(e) =>
                    updatePermanentAddress("city", e.target.value)
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Pin code
                </label>
                <input
                  type="text"
                  placeholder="Enter Pin"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={permanentAddress.pincode}
                  onChange={(e) =>
                    updatePermanentAddress("pincode", e.target.value)
                  }
                />
              </div>
            </div>
            {/* ---------------------------------------------------------------------- */}
            <h2 className="text-lg font-bold mt-6 mb-4">Registration Detail</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Admission Date
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  value={registrationDetail.admissionDate}
                  onChange={(e) =>
                    updateRegistrationDetail("admissionDate", e.target.value)
                  }
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
                  value={registrationDetail.admissionNumber}
                  onChange={(e) =>
                    updateRegistrationDetail("admissionNumber", e.target.value)
                  }
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
                  value={registrationDetail.rollNumber}
                  onChange={(e) =>
                    updateRegistrationDetail("rollNumber", e.target.value)
                  }
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
                  placeholder="Enter Aadhar Number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  value={registrationDetail.aadharNumber}
                  onChange={(e) =>
                    updateRegistrationDetail("aadharNumber", e.target.value)
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  PAN Number
                </label>
                <input
                  type="text"
                  placeholder="Enter Pan Number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  value={registrationDetail.panNumber}
                  onChange={(e) =>
                    updateRegistrationDetail("panNumber", e.target.value)
                  }
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
                placeholder="Enter Your Qualification"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={qualificationDetails._10th.qualification}
                onChange={(e) =>
                  updateQualificationDetails(
                    "_10th",
                    "qualification",
                    e.target.value
                  )
                }
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Board/University Name
              </label>
              <input
                type="text"
                placeholder="Enter Univedersity Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={qualificationDetails._10th.boardUniversity}
                onChange={(e) =>
                  updateQualificationDetails(
                    "_10th",
                    "boardUniversity",
                    e.target.value
                  )
                }
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
                  placeholder="Select Year"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  value={qualificationDetails._10th.year}
                  onChange={(e) =>
                    updateQualificationDetails("_10th", "year", e.target.value)
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Maximum Marks
                </label>
                <input
                  type="text"
                  placeholder="Select Marks"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  value={qualificationDetails._10th.maxMark}
                  onChange={(e) =>
                    updateQualificationDetails(
                      "_10th",
                      "maxMark",
                      e.target.value
                    )
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Maximum Obtained
                </label>
                <input
                  type="text"
                  placeholder="Maximum Obtained"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  value={qualificationDetails._10th.obtainMark}
                  onChange={(e) =>
                    updateQualificationDetails(
                      "_10th",
                      "obtainMark",
                      e.target.value
                    )
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Select Subject"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  value={qualificationDetails._10th.subject}
                  onChange={(e) =>
                    updateQualificationDetails(
                      "_10th",
                      "subject",
                      e.target.value
                    )
                  }
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
                placeholder="Enter Your Qualification"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={qualificationDetails._12th.qualification}
                onChange={(e) =>
                  updateQualificationDetails(
                    "_12th",
                    "qualification",
                    e.target.value
                  )
                }
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Board/University Name
              </label>
              <input
                type="text"
                placeholder="Enter Board/University Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={qualificationDetails._12th.boardUniversity}
                onChange={(e) =>
                  updateQualificationDetails(
                    "_12th",
                    "boardUniversity",
                    e.target.value
                  )
                }
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
                  placeholder="Enter Year"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  value={qualificationDetails._12th.year}
                  onChange={(e) =>
                    updateQualificationDetails("_12th", "year", e.target.value)
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Maximum Marks
                </label>
                <input
                  type="text"
                  placeholder="Enter Maximum Marks"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  value={qualificationDetails._12th.maxMark}
                  onChange={(e) =>
                    updateQualificationDetails(
                      "_12th",
                      "maxMark",
                      e.target.value
                    )
                  }
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
                  value={qualificationDetails._12th.obtainMark}
                  onChange={(e) =>
                    updateQualificationDetails(
                      "_12th",
                      "obtainMark",
                      e.target.value
                    )
                  }
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
                  value={qualificationDetails._12th.subject}
                  onChange={(e) =>
                    updateQualificationDetails(
                      "_12th",
                      "subject",
                      e.target.value
                    )
                  }
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
                placeholder="Enter Your Qualification"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={qualificationDetails.graduation.qualification}
                onChange={(e) =>
                  updateQualificationDetails(
                    "graduation",
                    "qualification",
                    e.target.value
                  )
                }
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Board/University Name
              </label>
              <input
                type="text"
                placeholder="Enter Board/University Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={qualificationDetails.graduation.boardUniversity}
                onChange={(e) =>
                  updateQualificationDetails(
                    "graduation",
                    "boardUniversity",
                    e.target.value
                  )
                }
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
                  placeholder="Select Year"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  value={qualificationDetails.graduation.year}
                  onChange={(e) =>
                    updateQualificationDetails(
                      "graduation",
                      "year",
                      e.target.value
                    )
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Maximum Marks
                </label>
                <input
                  type="text"
                  placeholder="Enter Maximum Marks"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  value={qualificationDetails.graduation.maxMark}
                  onChange={(e) =>
                    updateQualificationDetails(
                      "graduation",
                      "maxMark",
                      e.target.value
                    )
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Maximum Obtained
                </label>
                <input
                  type="text"
                  placeholder="Enter Maximum Obtained Marks"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  value={qualificationDetails.graduation.obtainMark}
                  onChange={(e) =>
                    updateQualificationDetails(
                      "graduation",
                      "obtainMark",
                      e.target.value
                    )
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Enter Subject"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  value={qualificationDetails.graduation.subject}
                  onChange={(e) =>
                    updateQualificationDetails(
                      "graduation",
                      "subject",
                      e.target.value
                    )
                  }
                />
              </div>
            </div>
            {/* Document Upload */}
            <h2 className="text-lg font-bold mt-6 mb-4">Upload Documents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-2">
                  Upload Signature
                </label>
                <input
                  type="file"
                  className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
                  value={documents.signature}
                  onChange={(e) => updateDocuments("signature", e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-2">Upload Image</label>
                <input
                  type="file"
                  className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
                  value={documents.photo}
                  onChange={(e) => updateDocuments("photo", e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-2">Class 10</label>
                <input
                  type="file"
                  className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
                  value={documents.class10}
                  onChange={(e) => updateDocuments("class10", e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-2">Class 12</label>
                <input
                  type="file"
                  className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
                  value={documents.class12}
                  onChange={(e) => updateDocuments("class12", e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-2">Graduation</label>
                <input
                  type="file"
                  className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
                  value={documents.graduation}
                  onChange={(e) =>
                    updateDocuments("graduation", e.target.value)
                  }
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-2">Diploma</label>
                <input
                  type="file"
                  className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
                  value={documents.diploma}
                  onChange={(e) => updateDocuments("diploma", e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-2">Aadhar Front</label>
                <input
                  type="file"
                  className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
                  value={documents.aadharFront}
                  onChange={(e) =>
                    updateDocuments("aadharFront", e.target.value)
                  }
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-2">Aadhar Back</label>
                <input
                  type="file"
                  className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
                  value={documents.aadharBack}
                  onChange={(e) =>
                    updateDocuments("aadharBack", e.target.value)
                  }
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-2">
                  Domicile Certificate
                </label>
                <input
                  type="file"
                  className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
                  value={documents.domicileCertificate}
                  onChange={(e) =>
                    updateDocuments("domicileCertificate", e.target.value)
                  }
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-2">
                  Income Certificate
                </label>
                <input
                  type="file"
                  className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
                  value={documents.incomeCertificate}
                  onChange={(e) =>
                    updateDocuments("incomeCertificate", e.target.value)
                  }
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
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateStudent;
