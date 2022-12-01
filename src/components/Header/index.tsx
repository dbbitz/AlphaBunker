import {
  Eye,
  UserCircle,
  ArrowsLeftRight,
  Bank,
  UploadSimple,
  DownloadSimple,
  CaretDown,
  EyeSlash,
} from 'phosphor-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Option } from '../../components/Option';
import { api } from '../../libs/api';

interface PropTypes {
  username: string;
  agency: string;
  account: string;
}
interface BalanceTypes {
  id: number;
  value: number;
}

export const Header = ({ username, agency, account }: PropTypes) => {
  const [visibleBalance, setVisibleBalance] = useState(true);
  const [balance, setBalance] = useState(0);
  const navigate = useNavigate();
  async function getBalance() {
    try {
      const { data } = await api.get<BalanceTypes[]>('/balance', {
        params: {
          id: 1,
        },
      });

      setBalance(data[0].value);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBalance();
  }, []);
  return (
    <header className="absolute flex w-screen h-[236px]">
      <div className="flex flex-col items-center w-screen h-[207px] bg-[#337782] rounded-b-3xl px-9 py-3 gap-3">
        <div className="flex justify-between items-center py-2.5 g-10px text-header-light w-full">
          <span className="text-xl leading-6 font-medium">
            Bem-vindo, {username}!
          </span>
          <UserCircle size={25} onClick={() => {
            navigate('/profile')
          }} />
        </div>
        <div className="flex justify-center items-start gap-2.5">
          <Option
            label="Extrato"
            icon={<Bank className="w-[26px] h-[20px]" onClick={() => {navigate('/dashboard/extract')}} />}
          />
          <Option
            label="Transferir"
            icon={<ArrowsLeftRight className="w-[26px] h-[20px]"
            onClick={() => {navigate('/dashboard/transfer')}} />}
          />
          <Option
            label="Depositar"
            icon={<UploadSimple className="w-[26px] h-[20px]"
            onClick={() => {navigate('/dashboard/deposit')}} />}
          />
          <Option
            label="Sacar"
            icon={<DownloadSimple className="w-[26px] h-[20px]"
            onClick={() => {navigate('/dashboard/withdraw')}} />}
          />
        </div>
        <div className="bg-[#ffffff] absolute rounded-lg h-[73px] w-[285px] bottom-[-10px] shadow-md">
          <div className="flex flex-col w-full h-full justify-center items-center px-2 py-1 gap-1">
            <div className="flex text-sm gap-2.5 pb-0 justify-center items-center">
              <span className="text-header-gold">Agência {agency}</span>
              <span className="text-header-gold">Conta: {account}</span>
              <CaretDown
                size={18}
                weight="bold"
                className="text-icon-dark-100"
              />
            </div>
            <div className="flex justify-start items-center gap-1 w-full px-4 text-brand-base">
              {visibleBalance ? (
                <Eye
                  className="text-[#777777]"
                  onClick={() => setVisibleBalance(false)}
                />
              ) : (
                <EyeSlash
                  className="text-[#777777]"
                  onClick={() => setVisibleBalance(true)}
                />
              )}

              <span className="text-2xl">
                {visibleBalance
                  ? balance.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })
                  : '-------------'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
