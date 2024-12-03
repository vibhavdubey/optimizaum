import FinanceHeader from "../../components/finance/FinanceHeader";
import FeeManagementSideBar from "../../components/finance/FeeManagementSidebar";
import FeeManagementCard from "../../components/finance/FeeManagementCard";

const FinanceFeeManagement = () => {
  return (
    <section className="px-3 py-2">
      <FinanceHeader />

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
