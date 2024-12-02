import FinanceHeader from "../../components/finance/FinanceHeader";
import FeeManagementSideBar from "../../components/finance/FeeManagementSidebar";

const FinanceFeeManagement = () => {
  return (
    <section className="px-3 py-2">
      <FinanceHeader />

      <div className="flex">
        <FeeManagementSideBar />
      </div>
    </section>
  );
};

export default FinanceFeeManagement;
