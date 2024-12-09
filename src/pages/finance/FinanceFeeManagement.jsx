import FinanceHeader from "../../components/finance/FinanceHeader";
import FeeManagementSideBar from "../../components/finance/FeeManagementSidebar";
import FeeManagementCard from "../../components/finance/FeeManagementCard";
import TabSwitcher from "../../components/finance/TabSwitcher";

const FinanceFeeManagement = () => {
  const tabs = [
    { label: "Fee", value: "fee" },
    { label: "Fee Capture", value: "fee_capture" },
  ];
  const handleTabChange = (selectedTab) => {
    console.log("Selected Tab:", selectedTab);
  };
  return (
    <section className="px-3 py-2">
      <FinanceHeader />
      <div className="flex justify-center items-center w-full -mt-12 mb-5">
        <TabSwitcher tabs={tabs} onTabChange={handleTabChange} />
      </div>
      <div className="flex gap-4">
        <FeeManagementSideBar />
        <div className="w-full">
          <FeeManagementCard />
        </div>
      </div>
    </section>
  );
};

export default FinanceFeeManagement;
