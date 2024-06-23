import { ReactNode } from "react";
import { classNames } from "../../utils/classNames";

const Button = ({
  children,
  label = "",
  className = "",
  type = "primary",
  action,
  submit = false,
}: ButtonInt) => {
  const types = {
    primary: {
      btn: "",
    },
    secondary: {
      btn: "",
    },
  };

  return (
    <button
      className={classNames(
        types[type].btn,
        className,
        "bg-[#222] text-[#e8e8e8] text-base max-xl:text-sm px-5 rounded-2xl hover:bg-[#2b2b2b] transition duration-300 relative flex items-center justify-center gap-2 h-full"
      )}
      type={submit ? "submit" : "button"}
      onClick={() => action && action()}
    >
      {children ? children : <>{label}</>}
    </button>
  );
};

export default Button;

export interface ButtonInt {
  label?: string;
  className?: string;
  children?: ReactNode;
  type?: ButtonType;
  action?: () => void;
  submit?: boolean;
}

type ButtonType = "primary" | "secondary";
