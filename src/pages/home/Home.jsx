import Header from "../../components/Header";
import DepartmentCard from "../../components/DepartmentCard";
import UpcomingHolidays from "../../components/UpcomingHolidays";
import EmployeeList from "../../components/EmployeeList";
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";

const Home = () => {
  const departments = [
    { name: "Admission", role: "UI/UX Designer" },
    { name: "Student", role: "UI/UX Designer", user: "student" },
    { name: "Finance", role: "Copywriter", user: "finance" },
    { name: "Faculty", role: "Copywriter" },
    { name: "Hostel", role: "IOS Developer" },
    { name: "Library", role: "UI/UX Designer" },
    { name: "Transport", role: "Copywriter" },
    { name: "HRM", role: "UI/UX Designer" },
  ];

  return (
    <div className="min-h-screen bg-[#F2F9FC]">
      <Header />
      <main className="p-6">
        <section className="flex justify-between gap-6">
          <div className="w-full p-4 bg-white rounded-[10px]">
            <h2 className="font-medium text-lg">Login</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {departments.map((department, index) => (
                <DepartmentCard key={index} {...department} />
              ))}
            </div>
          </div>
          <div className="w-[45%]">
            <UpcomingHolidays />
          </div>
        </section>
        <section className="mt-6">
          <EmployeeList />
        </section>
      </main>
    </div>
  );
};

export default Home;
