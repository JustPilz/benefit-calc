import clsx from "clsx";
import React, { ChangeEvent } from "react";

type InputProps = {
  value?: number | string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: "number" | "text";
  disabled?: boolean;
  className?: string;
};

function Input({
  value,
  onChange,
  type = "text",
  disabled,
  className,
}: InputProps) {
  return (
    <input
      onChange={onChange}
      value={value}
      type={type}
      className={clsx(
        "h-full w-full rounded border border-gray-300 p-2",
        className
      )}
      disabled={disabled}
    />
  );
}

export default Input;
