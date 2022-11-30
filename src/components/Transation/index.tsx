interface PropTypes {
  type: 'transfer-send' | 'transfer-received' | 'withdraw' | 'deposit';
  value: number;
}

export const Transation = ({ type, value }: PropTypes) => {
  switch (type) {
    case 'transfer-send':
      return (
        <div className="flex justify-between w-full">
          <span>Tranferência enviada</span>
          <span className="text-input-error">- R${value}</span>
        </div>
      );
    case 'transfer-received':
      return (
        <div className="flex justify-between w-full">
          <span>Transferência recebida </span>
          <span className="text-[#53D496]">+ R${value}</span>
        </div>
      );

    case 'withdraw':
      return (
        <div className="flex justify-between w-full">
          <span>Saque</span>
          <span className="text-input-error">- R${value}</span>
        </div>
      );
    case 'deposit':
      return (
        <div className="flex justify-between w-full">
          <span>Depósito</span>
          <span className="text-[#53D496]">+ R${value}</span>
        </div>
      );
  }
};
