const TaskDetails = () => {
  return (
    <div className="max-w-sm p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-bold text-gray-900">PN0001245</h1>
        <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25V9m0 6v3.75c0 1.245.507 2.25 1.5 2.25h6.75c.993 0 1.5-1.005 1.5-2.25V15m-12-3h15"
            />
          </svg>
        </button>
      </div>

      <div className="mb-4">
        <h2 className="text-sm font-semibold text-gray-600 mb-1">
          Description
        </h2>
        <p className="text-sm text-gray-800">
          App for maintaining your medical record, making appointments with a
          doctor, storing prescriptions.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-600 mb-1">Reporter</h3>
        <div className="flex items-center">
          <img
            className="w-8 h-8 rounded-full mr-2"
            src="https://via.placeholder.com/32"
            alt="Reporter"
          />
          <span className="text-sm text-gray-800">Evan Yates</span>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-600 mb-1">Assignees</h3>
        <div className="flex items-center">
          <img
            className="w-8 h-8 rounded-full mr-2"
            src="https://via.placeholder.com/32"
            alt="Assignee 1"
          />
          <img
            className="w-8 h-8 rounded-full mr-2"
            src="https://via.placeholder.com/32"
            alt="Assignee 2"
          />
          <span className="text-sm text-gray-800">+2</span>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-600 mb-1">Priority</h3>
        <span className="text-sm font-medium text-orange-500 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5l7 7-7 7"
            />
          </svg>
          Medium
        </span>
      </div>

      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-600 mb-1">Dead Line</h3>
        <p className="text-sm text-gray-800">Feb 23, 2020</p>
      </div>

      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-600 mb-1">Created</h3>
        <p className="text-sm text-gray-800">May 28, 2020</p>
      </div>

      <div className="flex justify-between">
        <button className="flex items-center text-indigo-600 hover:text-indigo-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25V9m0 6v3.75c0 1.245.507 2.25 1.5 2.25h6.75c.993 0 1.5-1.005 1.5-2.25V15m-12-3h15"
            />
          </svg>
          Edit
        </button>
        <button className="flex items-center text-blue-600 hover:text-blue-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25V9m0 6v3.75c0 1.245.507 2.25 1.5 2.25h6.75c.993 0 1.5-1.005 1.5-2.25V15m-12-3h15"
            />
          </svg>
          View
        </button>
      </div>
    </div>
  );
};

export default TaskDetails;
