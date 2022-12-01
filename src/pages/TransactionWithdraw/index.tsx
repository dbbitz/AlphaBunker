import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import { getTransactionForId } from '../../helper/handleTrasaction';
import { TransacitionTypes } from '../../helper/handleTrasaction';
import { Receipt } from 'phosphor-react';

export const TransactionWithdraw = () => {
  const { transactionId } = useParams();

  const [transaction, setTransaction] = useState<
    TransacitionTypes | undefined
  >();

  async function handleTrasaction() {
    const result: TransacitionTypes | undefined = await getTransactionForId(
      Number(transactionId),
    );
    setTransaction(result);
    console.log(result);
  }
  useEffect(() => {
    handleTrasaction();
  }, []);
  return (
    <>
      <Header username="Dhesem" agency="1510-5" account="95785-3" />
      <section className="mt-[235px] flex justify-center items-center h-screen w-full px-[23px] ">
        <div className="flex flex-col items-start px-[15px] py-3 gap-6 w-full bg-[#ffffff] rounded dark:bg-body-dark dark:border-btn-secondary-base border ">
          <div className="flex justify-start items-center gap-3 text-icon-gold">
            <Receipt size={24} weight="bold" />
            <span className="text-base">Comprovante de transação</span>
          </div>
          <div className="flex flex-col items-start p[5px] gap-5 w-full">
            <div className="bg-body-light-100 flex flex-col items-start gap-[15px] text-sm w-full rounded p-2 text-paragraph-light-200 dark:bg-body-dark dark:border-btn-secondary-base " >
              <span className='dark: text-paragraph-light-100'>Tipo: Saque</span>
              <span className="text-paragraph-light-100 dark:text-paragraph-light-200">
                Data: 03/07/2022 20:45
              </span>
              
            </div>
            <div className="flex justify-between px-2 pb-2 w-full">
              <span className='text-paragraph-light-200 dark:text-paragraph-light-100'>Valor</span>
              <span className="text-input-error">
                - R$ {transaction?.value},00
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

//TransactionWithdraw