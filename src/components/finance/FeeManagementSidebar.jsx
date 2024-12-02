import React from "react";
import { FaRegEdit, FaArrowUp, FaCalendar } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { ImAttachment } from "react-icons/im";

const FeeManagementSideBar = () => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 w-1/3">
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-md">PN0001245</p>
        </div>
        <button className="text-gray-900 hover:text-gray-700 p-2 rounded-[10px] bg-gray-100 flex justify-center items-center ">
          <FaRegEdit size={20} />
        </button>
      </div>

      <h3 className="text-md font-bold">Description</h3>
      <p className="text-gray-700 mb-5">
        App for maintaining your medical record, making appointments with a
        doctor, storing prescriptions
      </p>

      <h3 className="text-gray-500 text-md">Reporter</h3>
      <div className="flex items-center mb-5">
        <img
          src="/reporter-avatar.png"
          alt="Reporter Avatar"
          className="w-8 h-8 rounded-full mr-2"
        />
        <span className="text-gray-700">Evan Yates</span>
      </div>

      <h3 className="text-gray-500 text-md">Assignees</h3>
      <div className="flex items-center mb-5">
        <img
          src="./images/photo.png"
          alt="Assignee 1"
          className="w-8 h-8 rounded-full mr-2"
        />
        <img
          src="./images/photo.png"
          alt="Assignee 2"
          className="w-8 h-8 rounded-full mr-2"
        />
        <img
          src="./images/photo.png"
          alt="Assignee 3"
          className="w-8 h-8 rounded-full mr-2"
        />
        <span className="text-gray-700">+2</span>
      </div>

      <h3 className="text-gray-500 text-md">Priority</h3>
      <div className="flex items-center mb-5 gap-2">
        <FaArrowUp className="text-yellow-500" />
        <span className="text-yellow-500 font-bold">Medium</span>
      </div>

      <h3 className="text-gray-500 text-md">Deadline</h3>
      <div className="flex items-center mb-5">
        <span className="text-gray-700 font-bold">Feb 23, 2020</span>
      </div>

      <div className="flex items-center mb-2 gap-3">
        <FaCalendar className="text-gray-500" />
        <span className="text-gray-700">Created May 28, 2020</span>
      </div>
      <div className="flex items-center mb-2 gap-3">
        <div className="text-purple-500 px-1 py-1 rounded-md bg-purple-100 ">
          <ImAttachment className="text-purple-500" />
        </div>
        <div className="text-purple-500 px-1 py-1 rounded-md bg-blue-100">
          <span className="text-blue-700">
            <IoIosLink />
          </span>
        </div>
      </div>
    </div>
  );
};
export default FeeManagementSideBar;
