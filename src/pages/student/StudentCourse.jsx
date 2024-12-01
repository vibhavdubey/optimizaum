import CourseTable from "../../components/student/CourseTable";
import Pagination from "../../components/Pagination";
import StudentHeader from "../../components/student/StudentHeader";

const StudentCourse = () => {
  return (
    <section className="px-3 py-2">
      <StudentHeader />
      <CourseTable />
      <Pagination />
    </section>
  );
};

export default StudentCourse;
