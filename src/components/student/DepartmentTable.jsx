import { HiDotsVertical } from "react-icons/hi";
import Images from "../../assets/studentImg.png";

const DepartmentTable = () => {
  const students = Array(5).fill({
    name: "Vikash Kumar",
    email: "evanyates@gmail.com",
    num: 42,
    courses: 10,
    session: 10,
    batch: 10,
    students: 100,
    course: "B.Tech",
    status: "Done",
  });

  return (
    <div className="overflow-x-auto">
      <div className="w-full border-collapse">
        <div>
          {students &&
            students.map((item, index) => (
              <div
                key={index}
                className="hover:bg-gray-50 rounded-[15px] flex justify-around items-center my-2 bg-white shadow-sm"
              >
                <div className="p-4 flex items-center gap-2">
                  <img
                    src={Images}
                    alt="avatar"
                    className="w-14 h-14 rounded-full"
                  />
                </div>
                <div>
                  <p className="text-base">{item?.name}</p>
                  <p className="text-sm text-gray-500">{item?.email}</p>
                </div>
                <div className="border-l-2 border-b-2 border-violet-600 border-t-violet-300 border-r-violet-300 rounded-full px-2 py-1">
                  <p className="text-violet-600 text-base">{item?.num}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Courses</p>
                  <p className="text-base">{item?.courses}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Session</p>
                  <p className="text-base">{item?.session}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Batch</p>
                  <p className="text-base">{item?.batch}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Students</p>
                  <p className="text-base">{item?.students}</p>
                </div>

                <div className="h-12 flex items-end ">
                  <p className="text-sm font-semibold text-gray-500 border-2 border-gray-600 rounded-[4px] px-1 ">
                    {item?.course}
                  </p>
                </div>

                <p>
                  <span
                    className={`px-4 py-2 rounded text-sm ${
                      item.status === "Draft"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {item?.status}
                  </span>
                </p>
                <div>
                  <button className="text-black flex flex-col gap-2 bg-[#F5F8FD] p-3 rounded-[10px]">
                    <HiDotsVertical />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DepartmentTable;