import { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import { TransacitionTypes } from '../../helper/handleTrasaction'


export const Transation = ({ id, type, value }: TransacitionTypes) => {
    const navigete = useNavigate()
  switch (type) {
    case 'transfer-send':
      return (
        <div onClick={() => {navigete(`/transaction/transfersent/${id}`)}} className="flex justify-between w-full">
          <span>Tranferência enviada</span>
          <span className="text-input-error">- R${value}</span>
        </div>
      );
    case 'transfer-received':
      return (
        <div onClick={() => {navigete('/transaction/receivedtransfer')}} className="flex justify-between w-full">
          <span>Transferência recebida </span>
          <span className="text-[#53D496]">+ R${value}</span>
        </div>
      );

    case 'withdraw':
      return (
        <div onClick={() => {navigete(`/transaction/withdraw/${id}`)}} className="flex justify-between w-full">
          <span>Saque</span>
          <span className="text-input-error">- R${value}</span>
        </div>
      );
    case 'deposit':
      return (
        <div onClick={() => {navigete(`/transaction/deposit/${id}`)}} className="flex justify-between w-full">
          <span>Depósito</span>
          <span className="text-[#53D496]">+ R${value}</span>
        </div>
      );
  }
};
