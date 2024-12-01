import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const MyContext = createContext();

const MyContextProvider = (props) => {
  const [showStudentFilter, setShowStudentFilter] = useState(false);
  const [showAddNewStudent, setShowAddNewStudent] = useState(false);
  const [showAddNewDepartment, setShowAddNewDepartment] = useState(false);
  const [showAddNewCourse, setShowAddNewCourse] = useState(false);
  const [showAddNewSession, setShowAddNewSession] = useState(false);
  const [showAddNewBatch, setShowAddNewBatch] = useState(false);
  const navigate = useNavigate();

  const [userType, setUserType] = useState("home");

  const value = {
    navigate,
    showStudentFilter,
    setShowStudentFilter,
    showAddNewStudent,
    setShowAddNewStudent,
    showAddNewDepartment,
    setShowAddNewDepartment,
    showAddNewCourse,
    setShowAddNewCourse,
    showAddNewSession,
    setShowAddNewSession,
    showAddNewBatch,
    setShowAddNewBatch,

    userType,
    setUserType,
  };
  return (
    <MyContext.Provider value={value}>{props.children}</MyContext.Provider>
  );
};
export default MyContextProvider;
