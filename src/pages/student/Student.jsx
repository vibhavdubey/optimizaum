import { useContext, useEffect } from "react";
import Pagination from "../../components/Pagination";
import FilterBar from "../../components/student/FilterBar";
import StudentHeader from "../../components/student/StudentHeader";
import StudentTable from "../../components/student/StudentTable";
import { MyContext } from "../../context/MyContext";

const Student = () => {
  const { studentsData, getAllStudents } = useContext(MyContext);
  useEffect(() => {
    getAllStudents();
  }, []);
  console.log(studentsData);

  return (
    <section className="px-3 py-2">
      <StudentHeader />
      <FilterBar />

      <div className="overflow-x-auto">
        <div className="w-full border-collapse">
          <div className="min-h-screen">
            {studentsData &&
              studentsData.map((item, index) => (
                <StudentTable
                  key={index}
                  id={item._id}
                  name={item?.personalDetails?.studentName}
                  email={item?.personalDetails?.email}
                  num="42"
                  gender={item?.personalDetails?.gender}
                  birthday={item?.personalDetails?.dob}
                  contact={item?.personalDetails?.mobile}
                  roll={item?.registrationDetail?.rollNumber}
                  course={item?.academicDetails?.course?.courseName}
                />
              ))}
          </div>
        </div>
      </div>

      <Pagination />
    </section>
  );
};

export default Student;
