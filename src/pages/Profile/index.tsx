import { ArrowLeft, IdentificationCard, Vault } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
export const Profile = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-[#337782] absolute flex w-full h-[207px] rounded-b-3xl  px-[90px] py-[45px]">
        <div className="flex items-center w-[50px] h-[50px] absolute left-[6.4%] top-[10%] z-2"
        onClick={() => {
            navigate(-1)
        }}>
          <ArrowLeft
            size={32}
            color="#ffffff"
            weight="bold"
          />
        </div>
        <div className="flex flex-col items-center gap-3 w-full h-full">
          <img
            className="h-[80px] w-[80px]"
            src="src\assets\images\profile.svg"
            alt=""
          />
          <span className="text-xl w-full text-[#f7f7f7] leading-5 font-medium">
            Dhesem Pregads
          </span>
        </div>
      </div>
      <section className="w-full h-screen mt-[207px] flex flex-col gap-9 px-6 py-9">
        <div className="bg-white rounded-lg flex flex-col items-start py-3 px-4 gap-[25px] dark:bg-body-dark dark:border-btn-secondary-base border ">
          <div className="flex items-center justify-start gap-2.5 text-icon-gold">
            <IdentificationCard size={18} weight="bold" />
            <span className="text-base">Meus dados</span>
          </div>
          <div className="bg-body-light-100 w-full dark:text-paragraph-light-100 text-input-placeholder flex flex-col items-start p-[5px] gap-[5px] text-xs dark:bg-body-dark dark:border-btn-secondary-base">
            <span>Nome: Dhesem Pregads da Silva</span>
            <span>Data de nascimento: 01/01/2000</span>
            <span>CPF: 123.456.789-01</span>
          </div>
        </div>

        <div className="bg-white rounded-lg flex flex-col items-start py-3 px-4 gap-[25px] dark:bg-body-dark dark:border-btn-secondary-base border ">
          <div className="flex items-center justify-start gap-2.5 text-icon-gold">
            <Vault size={18} weight="bold" />
            <span className="text-base">Minhas contas correntes</span>
          </div>
          <div className="bg-body-light-100 w-full text-input-placeholder dark:text-paragraph-light-100 flex flex-col items-start p-[5px] gap-[5px] text-xs dark:bg-body-dark dark:border-btn-secondary-base">
            <span>Agência: 1510-5</span>
            <span>Conta: 95785-3</span>
          </div>
          <div className="bg-body-light-100 w-full text-input-placeholder dark:text-paragraph-light-100 flex flex-col items-start p-[5px] gap-[5px] text-xs dark:bg-body-dark dark:border-btn-secondary-base">
            <span>Agência: 1510-5</span>
            <span>Conta: 95785-3</span>
          </div>
        </div>
      </section>
    </>
  );
};
