import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { DownloadSimple } from 'phosphor-react';
import { handleTransaction } from '../../helper/handleTrasaction';
import { useState } from 'react';
import { Modal } from '../../components/Modal';
export const DashboardWithdraw = () => {
  const [value, setValue] = useState(0);
  const [modal, setModal] = useState(false);
  return (
    <>
    {modal && (
        <Modal title="Confirmar transação" setModal={setModal}>
          <p>Esta ação efetuará a transação. deseja continuar?</p>
          <div className="flex gap-5">
            <Button
              label="Cancelar"
              category="cancel"
              onClick={() => setModal(false)}
            />
            <Button
              label="Confirmar"
              category="primary"
              onClick={() => {
                handleTransaction({
                    value,
                    type: 'withdraw',
                    receipt: null,
                    sender: null,
                  })
                setModal(false);
              }}
            />
          </div>
        </Modal>
      )}
      <Header username="Dhesem" agency="1510-5" account="95785-3" />
      <section className="w-full h-screen mt-[68%] flex items-center justify-center px-[40px]">
        <div className="bg-[#ffffff] flex flex-col w-full items-center py-3 px-4 rounded-lg my-3 gap-4 dark:bg-body-dark dark:border-btn-secondary-base border">
          <div className="flex items-center gap-2.5 w-full text-base text-icon-gold">
            <DownloadSimple size={20} />
            Saque
          </div>
          <div className="flex flex-col items-start gap-2.5 w-full">
            <span className="text-base text-paragraph-dark font-normal dark:text-brand-text">
              Dados para saque
            </span>
            <div className="flex items-start gap-[30px] w-full">
              <div className="flex flex-col items-start">
                <Input
                  label="1510-5"
                  className="w-[110px]"
                  readonly={true}
                ></Input>
                <span className="text-input-inactive text-[11px] font-normal">
                  Agência
                </span>
              </div>

              <div className="flex flex-col items-start">
                <Input
                  label="95785-3"
                  className="w-[110px]"
                  readonly={true}
                ></Input>
                <span className="text-input-inactive text-[11px] font-normal">
                  Conta
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-5">
            <Input
              label="Valor"
              type="number"
              onChange={(e) => setValue(Number(e.target.value))}
            />
            <Input label="Senha" type="password" />
          </div>
          <Button
            label="Sacar"
            category="primary"
            className="w-full"
            onClick={() =>
              setModal(true)
            }
          />
        </div>
      </section>
    </>
  );
};
