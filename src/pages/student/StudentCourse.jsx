import CourseTable from "../../components/student/CourseTable";
import Pagination from "../../components/Pagination";
import StudentHeader from "../../components/student/StudentHeader";
import { useContext, useEffect } from "react";
import { MyContext } from "../../context/MyContext";

const StudentCourse = () => {
  const { studentCourseDatas, getAllStudentCourse, API_BASE_URL } =
    useContext(MyContext);

  useEffect(() => {
    getAllStudentCourse();
  }, [API_BASE_URL]);

  console.log(studentCourseDatas);

  return (
    <section className="px-3 py-2">
      <StudentHeader />

      <div className="overflow-x-auto">
        <div className="w-full border-collapse">
          <div className="min-h-screen">
            {studentCourseDatas &&
              studentCourseDatas.map((item, index) => (
                <CourseTable
                  key={index}
                  id={item?._id}
                  department={item?.department.departmentName}
                  courseName={item?.courseName}
                  description={item?.description}
                  courseImage={item?.courseImage}
                />
              ))}
          </div>
        </div>
      </div>

      <Pagination />
    </section>
  );
};

export default StudentCourse;
