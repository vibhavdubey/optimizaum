import FilterBar from "../../components/student/FilterBar";
import Pagination from "../../components/Pagination";
import StudentTable from "../../components/student/StudentTable";
import StudentHeader from "../../components/student/StudentHeader";

const Student = () => {
  return (
    <section className="px-3 py-2">
      <StudentHeader />
      <FilterBar />
      <StudentTable />
      <Pagination />
    </section>
  );
};

export default Student;
