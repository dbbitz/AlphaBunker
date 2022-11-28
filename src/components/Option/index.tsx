import { MouseEventHandler, ReactNode } from 'react';

interface PropTypes {
  label: string;
  icon: ReactNode;
  onClick?: MouseEventHandler;
}

export const Option = ({ label, icon }: PropTypes) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-[9px] text-icon-light">
        <div className="bg-[#75acb1] flex justify-center items-center p-3 gap-2.5 rounded">
          {icon}
        </div>
        <span className="text-xs font-normal leading-3">{label}</span>
      </div>
    </>
  );
};
