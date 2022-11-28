import { Input } from "../../components/Input";
import { Button  } from "../../components/Button";

export const Register = () => {
  return (
    <>
    <div className="w-full h-full flex flex-col justify-center items-center">
      <img src="./src/assets/images/logo.png" alt="" className="w-[102px] h-[102px]"/>
      <span className="text-paragraph-dark text-xl">Crie sua conta</span>
      <div className="flex flex-col items-start gap-6">
          <div className="flex flex-col items-start gap-5">

          </div>
          <div className="flex flex-col justify-center items-center gap-5">
              <Input label="Digite seu Nome"/>
              <Input label="Digite sua data de nascimento"/>
              <Input label="Digite seu CPF"/>
              <Input label="Digite seu Email"/>
              <Input label="Digite sua Senha"/>
              <Input label="Confirme sua senha"/>
          </div>
          <div className="flex flex-col justify-center gap-2 w-full">
              <Button label="Cadastrar" category="primary" className="bg-btn-primary-base flex flex-row justify-center items-center p-2.5 gap-2.5 rounded text-white"/>
              <span className="text-center text-sm text-[#353535]">Entrar</span>
          </div>
      </div>
    </div>
  </>
  );
};
