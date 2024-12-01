import DepartmentTable from "../../components/student/DepartmentTable";
import Pagination from "../../components/Pagination";
import StudentHeader from "../../components/student/StudentHeader";

const StudentDepartment = () => {
  return (
    <section className="px-3 py-2">
      <StudentHeader />
      <DepartmentTable />
      <Pagination />
    </section>
  );
};

export default StudentDepartment;
