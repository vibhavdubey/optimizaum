import Pagination from "../../components/Pagination";
import StudentHeader from "../../components/student/StudentHeader";

const StudentInfoPortal = () => {
  return (
    <section className="px-3 py-2">
      <StudentHeader />
      <Pagination />
    </section>
  );
};

export default StudentInfoPortal;
