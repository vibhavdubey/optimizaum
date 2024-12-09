import { useState } from "react";

const TabSwitcher = ({ tabs, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].value);

  const handleTabClick = (tabValue) => {
    setActiveTab(tabValue);
    onTabChange(tabValue);
  };

  return (
    <div className="flex bg-[#E7ECF5] p-2 rounded-full h-12 w-[50%]">
      {tabs &&
        tabs.map((tab) => (
          <button
            key={tab.value}
            className={`flex items-center justify-center  flex-1 py-2 px-4 rounded-full transition-all duration-300 ${
              activeTab === tab.value
                ? "bg-blue-500 text-white"
                : "bg-[#E7ECF5] text-gray-600 hover:text-gray-800"
            }`}
            onClick={() => handleTabClick(tab.value)}
          >
            {tab.label}
          </button>
        ))}
    </div>
  );
};

export default TabSwitcher;
