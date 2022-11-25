interface PropTypes {
  label: string;
  className?: string;
  readonly?: boolean;
  error?: boolean;
}

export const Input = ({ label, readonly, error, className }: PropTypes) => {
  return (
    <>
      <input
        type="text"
        placeholder={label}
        className="flex flex-row items-center p-2.5 gap-2.5 border border-input-border rounded text-base font-normal h-[33px]"
      />
    </>
  );
};
