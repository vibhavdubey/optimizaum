import { HiDotsVertical } from "react-icons/hi";

const FeeManagementCard = () => {
  const feeData = Array(5).fill({
    department: "Department Name",
    course: "Course Name",
    session: "2019-2020",
    batch: "Batch Name",
    fee: "1000000",
  });

  return (
    <div className="overflow-x-auto px-4">
      <div className="w-full border-collapse">
        <div>
          {feeData &&
            feeData.map((item, index) => (
              <div
                key={index}
                className="hover:bg-gray-50 rounded-[15px] flex justify-around items-center my-2 py-5 bg-white shadow-sm"
              >
                <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                <div>
                  <p className="text-xs text-gray-500">Department</p>
                  <p className="text-sm">{item?.department}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Course</p>
                  <p className="text-sm">{item?.course}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Session</p>
                  <p className="text-sm">{item?.session}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Batch</p>
                  <p className="text-sm">{item?.batch}</p>
                </div>

                <div className="h-12 flex justify-center items-center ">
                  <p className="text-sm font-semibold text-white bg-green-500 rounded-[8px] px-2 py-1 ">
                    {item?.fee}
                  </p>
                </div>

                <div>
                  <button className="text-black flex flex-col gap-2  bg-[#F5F8FD] p-3 rounded-[10px]">
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

export default FeeManagementCard;
