import DepartmentTable from "../../components/student/DepartmentTable";
import Pagination from "../../components/Pagination";
import StudentHeader from "../../components/student/StudentHeader";
import { useContext, useEffect } from "react";
import { MyContext } from "../../context/MyContext";

const StudentDepartment = () => {
  const {
    studentDepartmentDatas,
    getAllStudentDepartment,
    API_BASE_URL,
    showAddNewDepartment,
  } = useContext(MyContext);

  useEffect(() => {
    getAllStudentDepartment();
  }, [API_BASE_URL, showAddNewDepartment]);

  return (
    <section className="px-3 py-2">
      <StudentHeader />

      <div className="overflow-x-auto ">
        <div className="w-full border-collapse">
          <div className="custom-scrollbar overflow-y-auto mb-10 w-full">
            {studentDepartmentDatas &&
              studentDepartmentDatas.map((item, index) => (
                <DepartmentTable
                  key={index}
                  id={item?._id}
                  departmentImage={item?.departmentImage}
                  departmentName={item?.departmentName}
                  description={item?.description}
                />
              ))}
          </div>
        </div>
      </div>

      <Pagination />
    </section>
  );
};

export default StudentDepartment;
