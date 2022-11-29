import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { DownloadSimple } from "phosphor-react";
export const DashboardWithdraw = () => {
  return (
    <>
      <Header username="Dhesem" agency="1510-5" account="95785-3" />
      <section className="w-full h-screen mt-[68%] flex items-center justify-center px-[40px]">
        <div className="bg-[#ffffff] flex flex-col w-full items-center py-3 px-4 rounded-lg my-3 gap-4">
            <div className="flex items-center gap-2.5 w-full text-base text-icon-gold">
                <DownloadSimple size={20}/>
                Saque
            </div>
            <div className="flex flex-col items-start gap-2.5 w-full">
            <span className="text-base text-paragraph-dark font-normal">
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
          <div className='flex flex-col items-start gap-5'>
            <Input label='Valor' type='number'/>
            <Input label='Senha'type='password'/>
          </div>
          <Button label='Sacar' category='primary' className='w-full'/>
        </div>
      </section>
    </>
  );
};
