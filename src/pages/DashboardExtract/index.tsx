import { Header } from '../../components/Header';
import { Bank, Bell } from 'phosphor-react';
import { Transation } from '../../components/Transation';
import { useEffect, useState } from 'react';
import { getTransactions } from '../../helper/handleTrasaction';
import { TransacitionTypes } from '../../helper/handleTrasaction';

export const DashboardExtract = () => {
  const [transactions, setTransactions] = useState<TransacitionTypes[]>([]);

  useEffect(() => {
    getTransactions(setTransactions);
  },[]);

  return (
    <>
      <Header username="Dhesem" agency="1510-5" account="95785-3" />
      <section className="h-[405px] w-full absolute flex flex-col justify-center items-center py-3 px-4 gap-4 mt-[235px]">
        <div className="bg-[#ffffff] text-[#ffffff] flex flex-col items-center py-3 px-4 gap-6 rounded-md border-solid w-full">
          <div className="flex items-center justify-between gap-[35px] text-header-gold w-full">
            <div className="flex gap-2.5 items-center">
              <Bank size={20} />
              <span>Extrato de transações</span>
            </div>
            <Bell size={18} weight="bold" className="text-icon-dark-100" />
          </div>
          <div className="bg-body-light-100 flex flex-col items-start p-[5px] gap-5 rounded w-full">
            <div className="flex flex-col items-start gap-[5px] w-full">
              <span className="text-input-placeholder text-sm">03/07/2022</span>
              <div className="flex flex-col items-start w-full px-[5px] gap-[5px] text-input-inactive text-sm font-medium">
                {transactions.map((transaction) => (
                  <Transation
                    type={transaction.type}
                    value={transaction.value}
                    key={transaction.id}
                  />
                ))}
                
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
};
