import { HiDotsVertical } from "react-icons/hi";
import Images from "../../assets/studentImg.png";
const CourseTable = () => {
  const students = Array(5).fill({
    name: "Course Name",
    info: "info",
    department: "Name",
    session: 10,
    batch: 10,
    students: 12200,
    course: "B.Tech",
    status: "Done",
  });

  const handleUpdate = (id) => {};
  const handleDelete = (id) => {};
  const handleProfile = (id) => {};

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
                  <p className="text-sm text-gray-500">{item?.info}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Courses</p>
                  <p className="text-base">{item?.department}</p>
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
                <div className="group relative">
                  <button className="text-black flex flex-col gap-2 bg-[#F5F8FD] p-3 rounded-[10px]">
                    <HiDotsVertical />
                  </button>
                  <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-40">
                    <div className="bg-[#F5F8FD] shadow-2xl rounded-[10px] p-1 flex flex-col justify-center items-center gap-2 px-3 py-2 ">
                      <button
                        className="px-4 py-2 bg-[#E1F8F2] text-green-800 rounded-[10px]"
                        onClick={() => handleUpdate(item._id)}
                      >
                        Update
                      </button>
                      <button
                        className="px-4 py-2 bg-[#F8E0E1] text-red-800 rounded-[10px]"
                        onClick={() => handleDelete(item._id)}
                      >
                        Delete
                      </button>
                      <button
                        className="px-4 py-2 bg-[#988CFF] text-violet-800 rounded-[10px]"
                        onClick={handleProfile}
                      >
                        Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CourseTable;
