import { Route, Routes } from "react-router-dom";
import DashboardStudent from "./components/student/DashboardStudent";

import Home from "./pages/home/Home";
import { useContext } from "react";
import Login from "./components/Login";
import { MyContext } from "./context/MyContext";
import Dashboard from "./components/Dashboard";

import StudentDashboard from "./pages/student/StudentDashboard";
import Student from "./pages/student/Student";
import StudentDepartment from "./pages/student/StudentDepartment";
import StudentCourse from "./pages/student/StudentCourse";
import StudentSession from "./pages/student/StudentSession";
import StudentBatch from "./pages/student/StudentBatch";
import StudentChat from "./pages/student/StudentChat";
import StudentInfoPortal from "./pages/student/StudentInfoPortal";

import DashboardFinance from "./components/finance/DashboardFinance";
import FinanceDashboard from "./pages/finance/FinanceDashboard";
import FinanceFeeManagement from "./pages/finance/FinanceFeeManagement";
import FinanceDuesList from "./pages/finance/FinanceDuesList";
import FinanceReport from "./pages/finance/FinanceReport";
import FinanceTransaction from "./pages/finance/FinanceTransaction";
import FinanceChat from "./pages/finance/FinanceChat";
import FinanceInfoPortal from "./pages/finance/FinanceInfoPortal";

const App = () => {
  const { userType } = useContext(MyContext);
  return (
    <>
      <section className="flex bg-[#F5F8FD] min-h-screen">
        {userType === "home" ? (
          <>
            <Dashboard />
            <div className="w-full">
              <Routes>
                {/* home page route  */}
                <Route path="/optimizaum" element={<Home />} />
                <Route path="/optimizaum/login" element={<Login />} />
              </Routes>
            </div>
          </>
        ) : null}
        {/* ------------------------------------------------------- */}
        {/* student ERP Routes */}
        {userType === "student" ? (
          <>
            <DashboardStudent />
            <div className="w-full">
              <Routes>
                <Route
                  path="/student-dashboard"
                  element={<StudentDashboard />}
                />
                <Route path="/student" element={<Student />} />
                <Route
                  path="/student-department"
                  element={<StudentDepartment />}
                />
                <Route path="/student-course" element={<StudentCourse />} />
                <Route path="/student-session" element={<StudentSession />} />
                <Route path="/student-batch" element={<StudentBatch />} />
                <Route path="/student-chat" element={<StudentChat />} />
                <Route
                  path="/student-info-portal"
                  element={<StudentInfoPortal />}
                />
              </Routes>
            </div>
          </>
        ) : null}
        {/* ------------------------------------------------------- */}
        {/* finance ERP Routes */}
        {userType === "finance" ? (
          <>
            <DashboardFinance />
            <div className="w-full">
              <Routes>
                {/* finance ERP route  */}
                <Route
                  path="/finance-dashboard"
                  element={<FinanceDashboard />}
                />
                <Route
                  path="/finance-fee-management"
                  element={<FinanceFeeManagement />}
                />
                <Route
                  path="/finance-dues-list"
                  element={<FinanceDuesList />}
                />
                <Route path="/finance-report" element={<FinanceReport />} />
                <Route
                  path="/finance-transaction"
                  element={<FinanceTransaction />}
                />
                <Route path="/finance-chat" element={<FinanceChat />} />
                <Route
                  path="/finance-info-portal"
                  element={<FinanceInfoPortal />}
                />
              </Routes>
            </div>
          </>
        ) : null}
        {/* ------------------------------------------------------- */}
      </section>
    </>
  );
};

export default App;
