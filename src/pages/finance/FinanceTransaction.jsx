import React from "react";
import FinanceHeader from "../../components/finance/FinanceHeader";
import TransactionTable from "../../components/finance/TransactionTable";
import Pagination from "../../components/Pagination";

const FinanceTransaction = () => {
  return (
    <section className='className="px-3 py-2"'>
      <FinanceHeader />
      <TransactionTable />
      <Pagination />
    </section>
  );
};

export default FinanceTransaction;
