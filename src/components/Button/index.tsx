import { styled } from '@stitches/react';
import { MouseEventHandler } from 'react';

interface PropTypes {
  label: string;
  category: 'primary' | 'secondary' | 'cancel';
  className?: string;
  onClick?: MouseEventHandler;
}
export const Button = ({ label, category, className, onClick }: PropTypes) => {
  switch (category) {
    case 'primary':
      return (
        <button
          onClick={onClick}
          className={`${className} bg-btn-primary-base flex flex-row justify-center items-center p-2.5 gap-2.5 rounded text-white font-medium leading-6 text-sm`}
        >
          {label}
        </button>
      );

    case 'cancel':
      return (
        <button
          onClick={onClick}
          className={`${className} bg-btn-cancel-base flex flex-row justify-center items-center p-2.5 gap-2.5 rounded text-white font-medium leading-6 text-sm`}
        >
          {label}
        </button>
      );
    case 'secondary':
      <button
        onClick={onClick}
        className={`${className} bg-btn-secondary-base flex flex-row justify-center items-center p-2.5 gap-2.5 rounded text-white font-medium leading-6 text-sm`}
      >
        {label}
      </button>;
  }
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};
