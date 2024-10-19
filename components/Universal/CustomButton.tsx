import React, { ComponentProps } from "react";

// TODO: extend component with cva

type ButtonProps = {
  className: string;
  btnText: string;
  greenBorder: boolean;
  whiteBorder: boolean;
  onclick?: () => void;
  disabled?: boolean;
} & ComponentProps<"button">;

const CustomButton: React.FC<ButtonProps> = ({
  className,
  btnText,
  greenBorder,
  whiteBorder,
  onclick,
  disabled,
  ...props
}) => {
  return (
    <div className="w-full lg:w-auto">
      <button
        className={`${className} rounded-[10px] border-2 py-3 text-[16px] font-semibold ${
          greenBorder
            ? "border-[#42BCB1] text-[#42BCB1]"
            : whiteBorder
              ? "border-white text-white"
              : ""
        }`}
        onClick={onclick}
        {...props}
      >
        {btnText}
      </button>
    </div>
  );
};

export default CustomButton;
