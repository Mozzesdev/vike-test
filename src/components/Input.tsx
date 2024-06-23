/* eslint-disable react/prop-types */
import { FieldHookConfig, useField } from "formik";
import { useState } from "react";
import { classNames } from "../../utils/classNames";

const Input: React.FC<InputProps & FieldHookConfig<string>> = ({
  label = "",
  as = "input",
  children,
  className = "",
  floatLabel = false,
  placeholder = "",
  required = true,
  ...props
}) => {
  const [isFocus, setFocus] = useState(false);
  const [field, { value, touched, error }, { setTouched }] = useField(props);
  const Component = as;

  return (
    <div className={classNames("relative flex items-center h-full")}>
      <label
        htmlFor={props.id || props.name}
        className={classNames(
          touched && error ? "text-red-500" : "",
          !floatLabel || isFocus || value
            ? "-top-3 left-0 text-sm text-neutral-800"
            : "top-[50%] text-neutral-500 text-base left-3 pointer-events-none",
          "absolute z-20 -translate-y-1/2 transition-all ease-out duration-150"
        )}
      >
        {label}
        {required && !floatLabel ? <span> *</span> : ""}
      </label>
      <Component
        {...field}
        {...props}
        placeholder={placeholder && !floatLabel ? placeholder : ""}
        onBlur={() => setFocus(false)}
        onFocus={() => {
          setFocus(true);
          setTouched(true);
        }}
        className={classNames(
          className,
          touched && error
            ? "border-red-500 focus:border-red-500"
            : "border-gray-300 focus:border-gray-900",
          "bg-white border resize-none outline-none text-gray-900 text-base rounded-3xl focus:ring-gray-900 block w-full px-3 h-full placeholder:text-base"
        )}
      >
        {as === "select" ? children : null}
      </Component>
    </div>
  );
};

export default Input;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  as?: "input" | "select" | "textarea";
  children?: React.ReactNode;
  className?: string;
  placeholder?: string;
  floatLabel?: boolean;
  required?: boolean;
}
