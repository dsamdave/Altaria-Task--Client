import Image from "next/image";
import React, { useState } from "react";
import EyeLineIcon from "remixicon-react/EyeLineIcon";
import EyeCloseLineIcon from "remixicon-react/EyeCloseLineIcon";

interface CustomInputProps {
  placeholder: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  showPasswordToggle?: boolean;
  label: string;
  defaultValue?: string;
  className?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  type,
  value,
  onChange,
  showPasswordToggle = false,
  label,
  defaultValue,
  className,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="relative mt-1 rounded-[3px] border border-[#CED4DA]">
        <input
          type={showPassword ? "text" : type}
          value={value}
          onChange={handleInputChange}
          className={`block w-auto rounded bg-white px-3 py-2.5 text-[16px] font-normal text-[#565656] outline-none transition-colors ${className}`}
          placeholder={placeholder}
          defaultValue={defaultValue}
        />
        {showPasswordToggle && type === "password" && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5">
            <button
              type="button"
              className="focus:shadow-outline-blue text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none active:text-gray-800"
              onClick={handleTogglePassword}
            >
              {showPassword ? (
                <EyeLineIcon size={24} />
              ) : (
                <EyeCloseLineIcon size={24} />
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomInput;
