import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";

const Login = () => {
  const { userType, navigate } = useContext(MyContext);
  const handleskip = () => {
    if (userType === "student") {
      navigate("/student");
    } else if (userType === "finance") {
      navigate("/transaction");
    }
  };
  return (
    <div
      style={{ backdropFilter: "blur(5px)" }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30"
    >
      <div className="flex w-[60%] h-[70vh]">
        {/* Left Section */}
        <div className="flex-1 bg-blue-500 text-white flex flex-col justify-center items-center p-8">
          <div className="text-3xl font-bold mb-4">College Name</div>
          <div className="text-lg mb-8 text-center">
            Your place to work <br /> Plan. Create. Control.
          </div>
          <div className="relative">
            {/* Board Illustration */}
            <div className="w-64 h-48 bg-white rounded-lg shadow-md">
              <div className="p-4">
                <div className="flex justify-between mb-2">
                  <div className="bg-blue-400 w-12 h-4 rounded"></div>
                  <div className="bg-purple-400 w-12 h-4 rounded"></div>
                  <div className="bg-yellow-400 w-12 h-4 rounded"></div>
                </div>
                <div className="flex justify-between mb-2">
                  <div className="bg-gray-300 w-16 h-4 rounded"></div>
                  <div className="bg-gray-300 w-16 h-4 rounded"></div>
                  <div className="bg-gray-300 w-16 h-4 rounded"></div>
                </div>
                <div className="flex justify-between">
                  <div className="bg-blue-400 w-12 h-4 rounded"></div>
                  <div className="bg-yellow-400 w-12 h-4 rounded"></div>
                  <div className="bg-purple-400 w-12 h-4 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-white flex flex-col justify-center items-center">
          <div className="w-80">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              Sign In to Workroom
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="youremail@gmail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter Password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12h.01M12 15v.01M9 12h.01M12 9v.01M12 12v.01"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-sm text-blue-500 hover:underline">
                  Forgot Password?
                </a>
              </div>
              <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Sign In
              </button>
            </form>
            <div className="mt-4 text-center">
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Support & Tickets
              </a>
            </div>
            <div className="mt-4 text-center" onClick={handleskip}>
              <span className="text-sm text-blue-500 hover:underline">
                Skip
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
