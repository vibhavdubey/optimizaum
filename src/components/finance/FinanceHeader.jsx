import React, { useContext } from "react";
import { IoCalendarClearOutline, IoSearch } from "react-icons/io5";
import { SlBell } from "react-icons/sl";
import StudentImg from "../../assets/studentImg.png";
import { useLocation } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { MyContext } from "../../context/MyContext";
import AddNewFee from "./forms/AddNewFee";

const FinanceHeader = () => {
  const { showAddNewFee, setShowAddNewFee } = useContext(MyContext);
  const { pathname } = useLocation();
  // console.log("---->", pathname);
  return (
    <header className="p-4">
      <div className="flex justify-between items-center ">
        <div className="mb-3">
          <p className="text-base text-gray-400 mb-2">
            Powered by AppMingle Media
          </p>
          <h1 className="text-2xl font-semibold">
            {pathname === "/finance-dashboard" ? "Finance Dashboard" : ""}
            {pathname === "/finance-fee-management" ? "Fee Management" : ""}
            {pathname === "/finance-dues-list" ? "Dues List" : ""}
            {pathname === "/finance-report" ? "Report" : ""}
            {pathname === "/finance-transaction" ? "Transaction" : ""}
            {pathname === "/finance-chat" ? "Chat" : ""}
            {pathname === "/finance-info-portal" ? "Info Portal" : ""}
          </h1>
        </div>
        <div className=" flex flex-col justify-end gap-5 w-[60%]">
          <div className="flex justify-end gap-4 h-10 w-full">
            <button className="flex justify-start gap-3 items-center px-3 py-2 bg-gray-300 rounded-lg lg:w-[30%]">
              <span className="text-xl font-extrabold">
                <IoCalendarClearOutline />
              </span>
              <span className="text-sm">Today</span>
            </button>
            <button className="px-3 py-2 bg-white rounded-lg text-xl font-bold">
              <SlBell />
            </button>
            <button className="flex justify-start items-center gap-2 rounded-lg px-3 py-2 bg-white">
              <img src={StudentImg} alt="" className="w-6 h-6 rounded-full" />
              <span className="text-sm font-semibold">College Name</span>
            </button>
          </div>
        </div>
      </div>
      {pathname === "/finance-transaction" ? (
        <div className="w-[30%]">
          <div className="w-full relative">
            <input
              type="text"
              placeholder="Search Transaction..."
              className="pl-12 py-2 rounded-lg w-full"
            />
            <div className="absolute left-0 h-full w-10 inline-block text-2xl">
              <IoSearch className="mx-auto mt-2" />
            </div>
          </div>
        </div>
      ) : null}
      {pathname === "/finance-fee-management" ? (
        <div className="flex items-center justify-end gap-4">
          <button
            onClick={() => setShowAddNewFee(true)}
            className="bg-blue-500 text-white px-3 py-2 rounded-lg flex items-center gap-2 text-sm "
          >
            <span className="text-xl">
              <FaPlus />
            </span>
            Add New Fee
          </button>
        </div>
      ) : null}
      {showAddNewFee ? <AddNewFee /> : null}
    </header>
  );
};

export default FinanceHeader;
