import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export const Login = () => {
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
            <div className="flex flex-col justify-center gap-2">
                <Button label="Entrar" category="primary"/>
            </div>
        </div>
      </div>
    </>
  );
};
