import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const MyContext = createContext();

const MyContextProvider = (props) => {
  const [showStudentFilter, setShowStudentFilter] = useState(false);
  const [showAddNewStudent, setShowAddNewStudent] = useState(false);
  const [showAddNewDepartment, setShowAddNewDepartment] = useState(false);
  const [showUpdateDepartment, setShowUpdateDepartment] = useState(false);
  const [showAddNewCourse, setShowAddNewCourse] = useState(false);
  const [showAddNewSession, setShowAddNewSession] = useState(false);
  const [showAddNewBatch, setShowAddNewBatch] = useState(false);

  const [showChooseLoginUser, setShowChooseLoginUser] = useState(false);
  const navigate = useNavigate();

  const [userType, setUserType] = useState("home");
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // --------- Student Department api call -----------
  const [studentDepartmentDatas, setStudentDepartmentDatas] = useState([]);
  const [studentDepartmentDataId, setStudentDepartmentDataId] = useState();

  const getAllStudentDepartment = () => {
    axios
      .get(`${API_BASE_URL}/departments`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data?.data);
        setStudentDepartmentDatas(response.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const value = {
    navigate,
    showStudentFilter,
    setShowStudentFilter,
    showAddNewStudent,
    setShowAddNewStudent,
    showAddNewDepartment,
    setShowAddNewDepartment,
    showUpdateDepartment,
    setShowUpdateDepartment,
    showAddNewCourse,
    setShowAddNewCourse,
    showAddNewSession,
    setShowAddNewSession,
    showAddNewBatch,
    setShowAddNewBatch,

    showChooseLoginUser,
    setShowChooseLoginUser,

    userType,
    setUserType,
    API_BASE_URL,

    // student department getData and IdSet
    getAllStudentDepartment, // function to get all student department data
    studentDepartmentDatas,
    studentDepartmentDataId,
    setStudentDepartmentDataId,
  };
  return (
    <MyContext.Provider value={value}>{props.children}</MyContext.Provider>
  );
};
export default MyContextProvider;
