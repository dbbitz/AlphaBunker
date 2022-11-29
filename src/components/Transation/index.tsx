interface PropTypes {
  category: 'transfer-send' | 'transfer-received' | 'saque' | 'deposito';
  value: string;
}

export const Transation = ({ category, value }: PropTypes) => {
  switch (category) {
    case 'transfer-send':
      return (
        <div className="flex justify-between w-full">
          <span>Tranferência enviada</span>
          <span className="text-input-error">-R${value}</span>
        </div>
      );
    case 'transfer-received':
      return (
        <div className="flex justify-between w-full">
          <span>Transferência </span>
          <span className="text-[#53D496]">+ R${value}</span>
        </div>
      );

    case 'saque':
      return (
        <div className="flex justify-between w-full">
          <span>Saque</span>
          <span className="text-input-error">- R${value}</span>
        </div>
      );
    case 'deposito':
      return (
        <div className="flex justify-between w-full">
          <span>Depósito</span>
          <span className="text-[#53D496]">+ R${value}</span>
        </div>
      );
  }
};
