import React from "react";

const HolidayCard = ({ title, time, duration, lineColor, arrowDirection }) => {
  const arrowClass =
    arrowDirection === "up"
      ? "text-yellow-500"
      : "text-green-500 rotate-180 transform";

  return (
    <div className="flex items-center justify-between py-3 ">
      <div className="flex items-center gap-3">
        {/* Colored line */}
        <div
          className={`w-1 h-20 rounded-full`}
          style={{ backgroundColor: lineColor }}
        ></div>
        {/* Holiday details */}
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-gray-500 mt-6">{time}</p>
        </div>
      </div>
      {/* Right section: arrow + duration */}
      <div className="flex items-center gap-3">
        <i className={`fas fa-arrow-up ${arrowClass}`}></i>
        <div className="flex items-center gap-1 text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-md  mt-5">
          <i className="fas fa-clock"></i>
          <span>{duration}</span>
        </div>
      </div>
    </div>
  );
};

const UpcomingHolidays = () => {
  const holidays = [
    {
      title: "Presentation of the new department",
      time: "Today | 5:00 PM",
      duration: "4h",
      lineColor: "#3B82F6", // Blue line
      arrowDirection: "up",
    },
    {
      title: "Anna's Birthday",
      time: "Today | 6:00 PM",
      duration: "4h",
      lineColor: "#D946EF", // Pink line
      arrowDirection: "down",
    },
    {
      title: "Ray's Birthday",
      time: "Tomorrow | 2:00 PM",
      duration: "4h",
      lineColor: "#22C55E", // Green line
      arrowDirection: "down",
    },
  ];

  return (
    <section className="p-6 bg-white h-full rounded-lg shadow-sm ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Upcoming Holidays</h2>
        <a
          href="#"
          className="text-blue-500 text-sm font-medium hover:underline"
        >
          view all
        </a>
      </div>
      <div className="mt-10">
        {holidays.map((holiday, index) => (
          <HolidayCard key={index} {...holiday} />
        ))}
      </div>
    </section>
  );
};

export default UpcomingHolidays;
