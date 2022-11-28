import { Header } from '../../components/Header';
import { Bank, Bell } from 'phosphor-react';
import { Transation } from '../../components/Transation';
export const DashboardExtract = () => {
  return (
    <>
      <Header />
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
            <div className='flex flex-col items-start gap-[5px] w-full'>
                <span className='text-input-placeholder text-sm'>03/07/2022</span>
                <div className='flex flex-col items-start w-full px-[5px] gap-[5px] text-input-inactive text-sm font-medium'>
                    
                    <Transation category='transfer-send' value='26,49'/>
                    <Transation category='saque' value='515,00'/>
                    <Transation category='deposito' value='1.500,00'/>
                    <Transation category='transfer-received' value='630,00'/>
                </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
};
