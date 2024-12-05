import React, { useState } from "react";

const AddNewFee = () => {
  const [isOpen, setIsOpen] = useState(true); // State to control pop-up visibility

  const closePopUp = () => {
    setIsOpen(false);
  };

  const [lateFine, setLateFine] = useState(false);
  const [showSplitTotal, setShowSplitTotal] = useState(false);
  const [fineDetails, setFineDetails] = useState([
    { amount: "", description: "", startDate: "", endDate: "" },
  ]);
  const [finePerDaySplits, setFinePerDaySplits] = useState([{ amount: "" }]);

  // Handle adding a new fine split in the Fine Split Details section
  const handleAddFineSplit = () => {
    setFineDetails([
      ...fineDetails,
      { amount: "", description: "", startDate: "", endDate: "" },
    ]);
  };

  // Handle adding a new fine per day split
  const handleAddFinePerDaySplit = () => {
    setFinePerDaySplits([...finePerDaySplits, { amount: "" }]);
  };

  // Handle change in fine split fields
  const handleFineSplitChange = (index, field, value) => {
    const newFineDetails = [...fineDetails];
    newFineDetails[index][field] = value;
    setFineDetails(newFineDetails);
  };

  // Handle change in fine per day split fields
  const handleFinePerDaySplitChange = (index, value) => {
    const newFinePerDaySplits = [...finePerDaySplits];
    newFinePerDaySplits[index].amount = value;
    setFinePerDaySplits(newFinePerDaySplits);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50  backdrop-blur-sm flex justify-center items-center z-50">
          <div className="flex justify-center items-center min-h-screen bg-gray-100 w-1/2">
            <div className="bg-white shadow-lg rounded-lg p-5 w-full ">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold justify-center">
                  Add New Fee
                </h2>
                <button
                  className="text-gray-500 hover:text-gray-700 bg-gray-200 rounded-md text-3xl"
                  onClick={closePopUp} // Close the pop-up
                >
                  &times;
                </button>
              </div>

              {/* Form */}
              <div className="p-4 max-h-[90vh] overflow-y-auto w-full custom-scrollbar">
                <form className="w-full">
                  <div className="space-y-4">
                    {/* Fee Name */}
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        Fee Name
                      </label>
                      <input
                        type="text"
                        placeholder="Eg. Academic Fee, Event, etc..."
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                      />
                    </div>

                    {/* Department, Course, Session, Batch */}
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        Department
                      </label>
                      <select className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300">
                        <option>Select Department</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        Course
                      </label>
                      <select className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300">
                        <option>Select Course</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        Session
                      </label>
                      <select className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300">
                        <option>Select Session</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        Batch
                      </label>
                      <select className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300">
                        <option>Select Batch</option>
                      </select>
                    </div>

                    {/* Total Fee */}
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        Total Fee
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          placeholder="Enter Total Amount"
                          className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        />
                        <button
                          type="button"
                          onClick={() => setShowSplitTotal(!showSplitTotal)} // Toggle showSplitTotal on click
                          className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-600"
                        >
                          +Split
                        </button>
                      </div>
                    </div>

                    {/* Split Details Section */}
                    {showSplitTotal && (
                      <div className="space-y-4">
                        {fineDetails.map((split, index) => (
                          <div key={index} className="grid grid-cols-2 gap-6">
                            {/* First Split Name */}
                            <div>
                              <label className="block text-sm text-gray-600 mb-1">
                                First Split Name
                              </label>
                              <input
                                type="text"
                                placeholder="First Semester"
                                value={split.description}
                                onChange={(e) =>
                                  handleFineSplitChange(
                                    index,
                                    "description",
                                    e.target.value
                                  )
                                }
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                              />
                            </div>

                            {/* Amount */}
                            <div>
                              <label className="block text-sm text-gray-600 mb-1">
                                Amount
                              </label>
                              <input
                                type="number"
                                placeholder="Enter Total Amount"
                                value={split.amount}
                                onChange={(e) =>
                                  handleFineSplitChange(
                                    index,
                                    "amount",
                                    e.target.value
                                  )
                                }
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                              />
                            </div>
                            {/* Start Date */}
                            <div>
                              <label className="block text-sm text-gray-600 mb-1">
                                Start Date
                              </label>
                              <input
                                type="date"
                                value={split.startDate}
                                onChange={(e) =>
                                  handleFineSplitChange(
                                    index,
                                    "startDate",
                                    e.target.value
                                  )
                                }
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                              />
                            </div>

                            {/* End Date */}
                            <div>
                              <label className="block text-sm text-gray-600 mb-1">
                                End Date
                              </label>
                              <input
                                type="date"
                                value={split.endDate}
                                onChange={(e) =>
                                  handleFineSplitChange(
                                    index,
                                    "endDate",
                                    e.target.value
                                  )
                                }
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                              />
                            </div>
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={handleAddFineSplit}
                          className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-600"
                        >
                          +Split
                        </button>
                      </div>
                    )}

                    {/* Late Fine Toggle */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Late Fine</span>
                      <label
                        htmlFor="late-fine-switch"
                        className="relative inline-block w-8 mr-2"
                      >
                        <input
                          type="checkbox"
                          id="late-fine-switch"
                          checked={lateFine}
                          onChange={(e) => setLateFine(e.target.checked)}
                          className="hidden"
                        />
                        <span className="block w-8 h-4 bg-gray-300 rounded-full cursor-pointer transition duration-300"></span>
                        <span
                          className={`absolute left-0 top-0 w-4 h-4 bg-blue rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                            lateFine ? "translate-x-6 bg-blue-500" : "bg-[#fff]"
                          }`}
                        ></span>
                      </label>
                    </div>

                    {/* Fine Per Day Section */}
                    {lateFine && (
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">
                          Fine Per Day
                        </label>
                        {finePerDaySplits.map((split, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-4 mt-4"
                          >
                            <input
                              type="text"
                              placeholder="Enter fine per day amount"
                              value={split.amount}
                              onChange={(e) =>
                                handleFinePerDaySplitChange(
                                  index,
                                  e.target.value
                                )
                              }
                              className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="mt-6 justify-center">
                    <button
                      type="submit"
                      className="w-1/4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 "
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddNewFee;
