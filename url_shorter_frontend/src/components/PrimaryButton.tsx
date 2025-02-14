import React from "react";

type Props = React.ComponentProps<"button">;

export default function PrimaryButton(props: Props) {
  return (
    <button
      {...props}
      className={
        "p-5 text-lg font-bold bg-gradient-to-r from-[#A448FF] to-[#DA48FF] text-white h-[62px] focus:ring-0 focus:outline-none rounded-xl grid place-content-center hover:to-[#b75dce] " +
        (props.className ? ` ${props.className}` : "")
      }
    >
      {props.children}
    </button>
  );
}
