import { useContext } from "react";
import { MyContext } from "../../context/MyContext";
import { RxCross1 } from "react-icons/rx";

const StudentProfile = ({ data = {} }) => {
  const {
    name = "",
    fathersName = "",
    mothersName = "",
    studentsEmail = "",
    studentNumber = "",
    altNumber = "",
    dob = "",
    gender = "",
    category = "",
    religion = "",
    correspondenceAddress = "",
    permanentAddress = "",
    admissionDate = "",
    admission_EnrollmentNumber = "",
    rollNumber = "",
    aadharNumber = "",
    panNumber = "",
    aadharCardFront = "",
    aadharCardBack = "",
    classTenth = "",
    classTwelth = "",
    graduation = "",
  } = data;

  const { showStudentProfile, setShowStudentProfile } = useContext(MyContext);

  return (
    <div
      style={{ backdropFilter: "blur(5px)" }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div className="bg-white w-11/12 md:w-3/4 lg:w-1/2 rounded-lg shadow-lg p-6 overflow-y-auto max-h-[90vh]">
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
            { label: "Name", value: name },
            { label: "Father's Name", value: fathersName },
            { label: "Mother's Name", value: mothersName },
            { label: "Student Email ID", value: studentsEmail },
            { label: "Student Number", value: studentNumber },
            { label: "Alt. Number", value: altNumber },
            { label: "DOB", value: dob },
            { label: "Gender", value: gender },
            { label: "Category", value: category },
            { label: "Religion", value: religion },
            { label: "Correspondence Address", value: correspondenceAddress },
            { label: "Permanent Address", value: permanentAddress },
            { label: "Admission Date", value: admissionDate },
            {
              label: "Admission/Enrollment Number",
              value: admission_EnrollmentNumber,
            },
            { label: "Roll Number", value: rollNumber },
            { label: "Aadhar Number", value: aadharNumber },
            { label: "Pan Number", value: panNumber },
            { label: "Aadhar Card Front", value: aadharCardFront },
            { label: "Aadhar Card Back", value: aadharCardBack },
            { label: "Class 10th", value: classTenth },
            { label: "Class 12th", value: classTwelth },
            { label: "Graduation", value: graduation },
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
