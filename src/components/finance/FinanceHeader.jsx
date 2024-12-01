import React from "react";
import { IoCalendarClearOutline } from "react-icons/io5";
import { SlBell } from "react-icons/sl";
import StudentImg from "../../assets/studentImg.png";
import { useLocation } from "react-router-dom";

const FinanceHeader = () => {
  const { pathname } = useLocation();
  // console.log("---->", pathname);
  return (
    <div className="flex justify-between items-center p-4">
      <div className="mb-3">
        <p className="text-base text-gray-400 mb-2">
          Powered by AppMingle Media
        </p>
        <h1 className="text-3xl font-semibold">
          {pathname === "/finance-dashboard" ? "Finance Dashboard" : ""}
          {pathname === "/finance-fee-management" ? "Fee Management" : ""}
          {pathname === "/finance-dues-list" ? "Dues List" : ""}
          {pathname === "/finance-report" ? "Report" : ""}
          {pathname === "/finance-transaction" ? "Transaction" : ""}
          {pathname === "/finance-chat" ? "Chat" : ""}
          {pathname === "/finance-info-portal" ? "Info Portal" : ""}
        </h1>
      </div>
      <div className=" flex flex-col justify-end gap-5 w-[40%]">
        <div className="flex justify-end gap-4">
          <button className="flex justify-start gap-3 items-center w-[50%] px-3 py-2 bg-gray-300 rounded-lg">
            <span className="text-xl font-extrabold">
              <IoCalendarClearOutline />
            </span>
            <span className="text-lg">Today</span>
          </button>
          <button className="px-3 py-2 bg-white rounded-lg text-xl font-bold">
            <SlBell />
          </button>
          <button className="flex justify-start items-center gap-2 rounded-lg px-3 py-2 w-[40%] bg-white">
            <img src={StudentImg} alt="" className="w-8 h-8 rounded-full" />
            <span className="text-lg font-semibold">College Name</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinanceHeader;
