import Pagination from "../../components/Pagination";
import SessionTable from "../../components/student/SessionTable";
import StudentHeader from "../../components/student/StudentHeader";

const StudentSession = () => {
  return (
    <section className="px-3 py-2">
      <StudentHeader />
      <SessionTable />
      <Pagination />
    </section>
  );
};

export default StudentSession;
