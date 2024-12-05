import CourseTable from "../../components/student/CourseTable";
import Pagination from "../../components/Pagination";
import StudentHeader from "../../components/student/StudentHeader";
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";

const StudentCourse = () => {
  const { studentCourseDatas } = useContext(MyContext);
  return (
    <section className="px-3 py-2">
      <StudentHeader />

      <div className="overflow-x-auto">
        <div className="w-full border-collapse">
          <div>
            {studentCourseDatas &&
              studentCourseDatas.map((item, index) => (
                <CourseTable
                  key={index}
                  id={item?._id}
                  department={item?.department}
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
