interface PropTypes {
  label: string;
  type?: string;
  className?: string;
  readonly?: boolean;
  error?: boolean;
}

export const Input = ({ label, readonly, error, type, className }: PropTypes) => {
  if (readonly) {
    return (
      <>
        <input
          type={type}
          placeholder={label}
          disabled
          className={`bg-input-readonly flex flex-row items-center p-2.5 gap-2.5 border border-input-border rounded text-base text-[#727272] font-normal h-[33px] ${className}`}
        />
      </>
    );
  }
  return (
    <>
      <input
        type={type}
        placeholder={label}
        className={`text-black bg-input-base flex flex-row items-center p-2.5 gap-2.5 border border-input-border rounded text-base font-normal h-[33px] ${className}`}
      />
    </>
  );
};
