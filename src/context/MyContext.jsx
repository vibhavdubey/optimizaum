import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const MyContext = createContext();

const MyContextProvider = (props) => {
  //-------------------------------student--------------------------------

  const [showStudentFilter, setShowStudentFilter] = useState(false);
  const [showAddNewStudent, setShowAddNewStudent] = useState(false);
  const [showUpdateStudent, setShowUpdateStudent] = useState(false);
  const [showAddNewDepartment, setShowAddNewDepartment] = useState(false);
  const [showUpdateDepartment, setShowUpdateDepartment] = useState(false);
  const [showAddNewCourse, setShowAddNewCourse] = useState(false);
  const [showUpdateCourse, setShowUpdateCourse] = useState(false);
  const [showAddNewSession, setShowAddNewSession] = useState(false);
  const [showUpdateSession, setShowUpdateSession] = useState(false);
  const [showAddNewBatch, setShowAddNewBatch] = useState(false);

  const [showStudentProfile, setShowStudentProfile] = useState(false);

  //-------------------------------finance--------------------------------
  const [showAddNewFee, setShowAddNewFee] = useState(false);

  const [showChooseLoginUser, setShowChooseLoginUser] = useState(false);
  const navigate = useNavigate();

  const [userType, setUserType] = useState("home");
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // ------------------------ Student Department api call ----------------------
  const [studentDepartmentDatas, setStudentDepartmentDatas] = useState([]);
  const [singleStudentDepartmentDatas, setSingleStudentDepartmentDatas] =
    useState({});
  const [studentDepartmentDataId, setStudentDepartmentDataId] = useState();

  // to get all student department data
  const getAllStudentDepartment = () => {
    axios
      .get(`${API_BASE_URL}/departments`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        // console.log(response.data?.data);
        setStudentDepartmentDatas(response.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // to get a single student department data
  const getSingleStudentDepartment = (studentDepartmentDataId) => {
    axios
      .get(`${API_BASE_URL}/departments/${studentDepartmentDataId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((responce) => {
        // console.log(responce.data?.data);
        const data = responce.data?.data;
        setSingleStudentDepartmentDatas(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // ----------------------- Student Course api call ---------------------------
  const [studentCourseDatas, setStudentCourseDatas] = useState([]);
  const [singleStudentCourseDatas, setSingleStudentCourseDatas] = useState({});
  const [studentCourseDataId, setStudentCourseDataId] = useState();
  // to get all student course data
  const getAllStudentCourse = () => {
    axios
      .get(`${API_BASE_URL}/courses`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        // console.log(response.data?.data);
        setStudentCourseDatas(response.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // to get a single student course data
  const getSingleStudentCourse = (studentCourseDataId) => {
    axios
      .get(`${API_BASE_URL}/courses/${studentCourseDataId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        // console.log(response.data?.data);
        const data = response.data?.data;
        setSingleStudentCourseDatas(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // ----------------------- Student Session api call ---------------------------
  const [studentSessionDatas, setStudentSessionDatas] = useState([]);
  const [singleStudentSessionDatas, setSingleStudentSessionDatas] = useState(
    {}
  );
  const [studentSessionDataId, setStudentSessionDataId] = useState();

  // to get all student session data
  const getAllStudentSession = () => {
    axios
      .get(`${API_BASE_URL}/sessions`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        // console.log(response.data?.data);
        setStudentSessionDatas(response.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // to get a single student session data

  const getSingleStudentSession = (studentSessionDataId) => {
    axios
      .get(`${API_BASE_URL}/sessions/${studentSessionDataId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        // console.log(response.data?.data);
        const data = response.data?.data;
        setSingleStudentSessionDatas(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // ----------------------- Student  api call ---------------------------
  const [studentsData, setStudentsData] = useState([]);
  const [singleStudentDatas, setSingleStudentDatas] = useState({});
  const [studentDataId, setStudentDataId] = useState();
  const getAllStudents = () => {
    axios
      .get(`${API_BASE_URL}/students`, {
        headers: {
          Authorization: `Bearer${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response?.data?.data);
        const data = response?.data?.data;
        setStudentsData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getSingleStudent = (studentDataId) => {
    axios
      .get(`${API_BASE_URL}/students/${studentDataId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        // console.log(response?.data?.data);
        const data = response?.data?.data;
        setSingleStudentDatas(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const value = {
    navigate,

    // student related
    showStudentFilter,
    setShowStudentFilter,

    showAddNewStudent,
    setShowAddNewStudent,
    showUpdateStudent,
    setShowUpdateStudent,
    showStudentProfile,
    setShowStudentProfile,

    showAddNewDepartment,
    setShowAddNewDepartment,
    showUpdateDepartment,
    setShowUpdateDepartment,

    showAddNewCourse,
    setShowAddNewCourse,
    showUpdateCourse,
    setShowUpdateCourse,

    showAddNewSession,
    setShowAddNewSession,
    showUpdateSession,
    setShowUpdateSession,

    showAddNewBatch,
    setShowAddNewBatch,

    showChooseLoginUser,
    setShowChooseLoginUser,

    userType,
    setUserType,
    API_BASE_URL,

    // student department getData and IdSet
    getAllStudentDepartment, // function to get all student department data
    getSingleStudentDepartment, // function to get single student department data by id
    studentDepartmentDatas,
    singleStudentDepartmentDatas,
    studentDepartmentDataId,
    setStudentDepartmentDataId,

    // student course getData and IdSet
    getAllStudentCourse, // function to get all student course data
    getSingleStudentCourse, // function to get single student course data by id
    studentCourseDatas,
    singleStudentCourseDatas,
    studentCourseDataId,
    setStudentCourseDataId,

    // student session getData and IdSet
    getAllStudentSession, // function to get all student session data
    getSingleStudentSession, //  function to get single student session data by id
    studentSessionDatas,
    singleStudentSessionDatas,
    studentSessionDataId,
    setStudentSessionDataId,

    // student getData and IdSet
    getAllStudents, // function to get all student data
    getSingleStudent, // function to get single student data by id
    studentsData,
    singleStudentDatas,
    setStudentsData,
    studentDataId,
    setStudentDataId,

    // finance related
    showAddNewFee,
    setShowAddNewFee,
  };
  return (
    <MyContext.Provider value={value}>{props.children}</MyContext.Provider>
  );
};
export default MyContextProvider;
