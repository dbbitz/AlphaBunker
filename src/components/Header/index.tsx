import {
  Eye,
  UserCircle,
  ArrowsLeftRight,
  Bank,
  UploadSimple,
  DownloadSimple,
  CaretDown,
} from 'phosphor-react';
import { Option } from '../../components/Option';

export const Header = () => (
  <header className="absolute flex w-screen h-[236px]">
    <div className="flex flex-col items-center w-screen h-[207px] bg-[#337782] rounded-b-3xl px-9 py-3 gap-3">
      <div className="flex justify-between items-center py-2.5 g-10px text-header-light w-full">
        <span className="text-xl leading-6 font-medium">
          Bem-vindo, Usuário!
        </span>
        <UserCircle size={25} />
      </div>
      <div className="flex justify-center items-start gap-2.5">
        <Option label="Extrato" icon={<Bank className="w-[26px] h-[20px]" />} />
        <Option
          label="Transferir"
          icon={<ArrowsLeftRight className="w-[26px] h-[20px]" />}
        />
        <Option
          label="Depositar"
          icon={<UploadSimple className="w-[26px] h-[20px]" />}
        />
        <Option
          label="Sacar"
          icon={<DownloadSimple className="w-[26px] h-[20px]" />}
        />
      </div>
      <div className="bg-[#ffffff] absolute rounded-lg h-[73px] w-[285px] bottom-[-10px] shadow-md">
        <div className="flex flex-col w-full h-full justify-center items-center px-2 py-1 gap-1">
          <div className="flex text-sm gap-2.5 pb-0 justify-center items-center">
            <span className="text-header-gold">Agência 1510-5</span>
            <span className="text-header-gold">Conta: 95785-3</span>
            <CaretDown size={18} weight="bold" className="text-icon-dark-100" />
          </div>
          <div className="flex justify-start items-center gap-1 w-full px-4 text-brand-base">
            <Eye className="text-[#777777]" />
            <span className="text-2xl">132.758,20</span>
            <span className="text-sm text-brand-hover">R$</span>
          </div>
        </div>
      </div>
    </div>
  </header>
);
