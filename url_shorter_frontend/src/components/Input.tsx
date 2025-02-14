import React from "react";

type Props = React.ComponentProps<"input"> & {
  errorMessage?: string;
};

export default function Input({errorMessage, ...props}: Props) {
  return (
    <div className="flex flex-col gap-1">
      <input
        {...props}
        className={
          "p-6 placeholder:text-[#606060] text-xl font-normal border-4 border-[#6F69DC] bg-[#D1D1D1] h-[68px] focus:ring-0 focus:outline-none rounded-xl dark:placeholder:text-[#D1D1D1] dark:bg-[#1E1E1E] invalid:border-red-500" +
          (props.className ? ` ${props.className}` : "")
        }
      />
      {errorMessage && (
        <span className="dark:text-red-300 text-red-600 text-base font-normal pl-2">{errorMessage}</span>
      )}
    </div>
  );
}
