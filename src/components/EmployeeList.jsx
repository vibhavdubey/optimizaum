// import React from "react";
// import EmployeeImg from "../assets/studentImg.png";
// import { HiDotsVertical } from "react-icons/hi";

// const EmployeeRow = ({
//   name,
//   email,
//   gender,
//   birthday,
//   age,
//   position,
//   rank,
// }) => {
//   return (
//     <div className="overflow-x-auto ">
//       <div className="w-full border-collapse">
//         <div className="hover:bg-gray-50 rounded-[15px] flex justify-around items-center my-2 bg-white shadow-sm">
//           <div className="p-4 flex items-center gap-2">
//             <img
//               src={EmployeeImg}
//               alt="avatar"
//               className="w-14 h-14 rounded-full"
//             />
//           </div>
//           <div>
//             <p className="text-base">{name}</p>
//             <p className="text-sm text-gray-500">{email}</p>
//           </div>
//           <div>
//             <p className="text-sm text-gray-500">Gender</p>
//             <p className="text-base">{gender}</p>
//           </div>
//           <div>
//             <p className="text-sm text-gray-500">Birthday</p>
//             <p className="text-base">{birthday}</p>
//           </div>
//           <div>
//             <p className="text-sm text-gray-500">Full age</p>
//             <p className="text-base">{age}</p>
//           </div>
//           <div>
//             <p className="text-sm text-gray-500">Position</p>
//             <p className="text-base">{position}</p>
//           </div>

//           <div className="h-12 flex items-end ">
//             <p className="text-sm font-semibold text-gray-500 border-2 border-gray-600 rounded-[4px] px-1 ">
//               {rank}
//             </p>
//           </div>

//           <div>
//             <button className="text-black flex flex-col gap-2 ">
//               <HiDotsVertical />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const EmployeeList = () => {
//   const employees = Array(5).fill({
//     name: "Evan Yates",
//     email: "evanyates@gmail.com",
//     gender: "Male",
//     birthday: "Apr 12, 1995",
//     age: 25,
//     position: "UI/UX Designer",
//     rank: "Middle",
//   });
//   // Add more employees as needed

//   return (
//     <section className="p-4 rounded-lg">
//       <h2 className="font-medium text-lg">Employee</h2>
//       {employees.map((employee, index) => (
//         <EmployeeRow key={index} {...employee} />
//       ))}
//     </section>
//   );
// };

// export default EmployeeList;
