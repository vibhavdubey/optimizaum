import { useContext, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import { MyContext } from "../../context/MyContext";

const StudentProfile = () => {
  const {
    showStudentProfile,
    setShowStudentProfile,
    getSingleStudent,
    studentDataId,
    singleStudentDatas,
  } = useContext(MyContext);

  useEffect(() => {
    getSingleStudent(studentDataId);
  }, []);
  console.log("---->", singleStudentDatas);

  return (
    <div
      style={{ backdropFilter: "blur(5px)" }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div className="bg-white w-11/12 md:w-3/4 lg:w-1/2 rounded-lg shadow-lg p-6 overflow-y-auto max-h-[90vh] custom-scrollbar">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h1 className="font-bold text-2xl text-gray-800">Student Profile</h1>
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={() => setShowStudentProfile(false)}
          >
            <RxCross1 size={24} />
          </button>
        </div>

        {/* Profile Details */}
        <div className="grid grid-cols-1  gap-4">
          {[
            {
              label: "Name",
              value: singleStudentDatas?.personalDetails?.studentName,
            },
            {
              label: "Father's Name",
              value: singleStudentDatas?.personalDetails?.fatherName,
            },
            {
              label: "Mother's Name",
              value: singleStudentDatas?.personalDetails?.motherName,
            },
            {
              label: "Student Email ID",
              value: singleStudentDatas?.personalDetails?.email,
            },
            {
              label: "Student Number",
              value: singleStudentDatas?.personalDetails?.mobile,
            },
            {
              label: "Alt. Number",
              value: singleStudentDatas?.personalDetails?.alternateMobile,
            },
            { label: "DOB", value: singleStudentDatas?.personalDetails?.dob },
            {
              label: "Gender",
              value: singleStudentDatas?.personalDetails?.gender,
            },
            {
              label: "Category",
              value: singleStudentDatas?.personalDetails?.gender,
            },
            {
              label: "Religion",
              value: singleStudentDatas?.personalDetails?.religion,
            },
            {
              label: "Correspondence Address",
              value: singleStudentDatas?.correspondenceAddress?.address1,
            }, //
            {
              label: "Permanent Address",
              value: singleStudentDatas?.permanentAddress?.address1,
            },
            {
              label: "Admission Date",
              value: singleStudentDatas?.registrationDetail?.admissionDate,
            },
            {
              label: "Admission/Enrollment Number",
              value: singleStudentDatas?.registrationDetail?.admissionNumber,
            },
            {
              label: "Roll Number",
              value: singleStudentDatas?.registrationDetail?.rollNumber,
            },
            {
              label: "Aadhar Number",
              value: singleStudentDatas?.registrationDetail?.aadharNumber,
            },
            {
              label: "Pan Number",
              value: singleStudentDatas?.registrationDetail?.panNumber,
            },
            {
              label: "Aadhar Card Front",
              value: singleStudentDatas?.documents?.aadharFront,
            },
            {
              label: "Aadhar Card Back",
              value: singleStudentDatas?.documents?.aadharCardBack,
            },
            {
              label: "Class 10th",
              value: singleStudentDatas?.documents?.class10,
            },
            {
              label: "Class 12th",
              value: singleStudentDatas?.documents?.class12,
            },
            {
              label: "Graduation",
              value:
                singleStudentDatas?.qualificationDetails?.graduation
                  ?.qualification,
            },
          ].map((field, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-base text-gray-600">{field.label}:</span>
              <span className="text-lg text-gray-800 font-medium">
                {field.value || "---"}
              </span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6 text-right">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700"
            onClick={() => setShowStudentProfile(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
