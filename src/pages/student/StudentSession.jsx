import { useContext, useEffect } from "react";
import Pagination from "../../components/Pagination";
import SessionTable from "../../components/student/SessionTable";
import StudentHeader from "../../components/student/StudentHeader";
import { MyContext } from "../../context/MyContext";

const StudentSession = () => {
  const { studentSessionDatas, getAllStudentSession, API_BASE_URL } =
    useContext(MyContext);
  console.log(studentSessionDatas);

  useEffect(() => {
    getAllStudentSession();
  }, [API_BASE_URL]);

  return (
    <section className="px-3 py-2">
      <StudentHeader />

      <div className="overflow-x-auto">
        <div className="w-full border-collapse">
          <div className="custom-scrollbar overflow-y-auto mb-10 min-h-screen">
            {studentSessionDatas &&
              studentSessionDatas.map((item, index) => (
                <SessionTable
                  key={index}
                  id={item._id}
                  session={item.session}
                  departmentName={item.department?.departmentName}
                  courseName={item.course?.courseName}
                />
              ))}
          </div>
        </div>
      </div>

      <Pagination />
    </section>
  );
};

export default StudentSession;
