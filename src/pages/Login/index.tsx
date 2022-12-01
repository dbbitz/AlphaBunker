import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate()
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <img src="./src/assets/images/logo.png" alt="" className=""/>
        <span className="text-paragraph-dark text-xl">Login</span>
        <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col items-start gap-5">

            </div>
            <div className="flex flex-col justify-center items-center gap-5">
                <Input label="Digite seu CPF"/>
                <Input label="Digite sua senha"/>
            </div>
            <div className="flex flex-col justify-center gap-2 w-full">
                <Button label="Entrar" onClick={() => navigate('/dashboard/extract')} category="primary" className="bg-btn-primary-base flex flex-row justify-center items-center p-2.5 gap-2.5 rounded text-white"/>
                <span className="text-center text-sm text-[#353535]">Crie sua conta</span>
            </div>
        </div>
      </div>
    </>
  );
};
