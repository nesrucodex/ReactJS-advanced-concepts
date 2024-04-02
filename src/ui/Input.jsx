import { string, any, node } from "prop-types";

import { twMerge } from "tailwind-merge";

Input.propTypes = {
  labelText: string,
  id: string,
  name: string,
  errorMessage: string,
  inputStyle: string,
  labelStyle: string,
  options: any,
  children: node,
  className:string
};
export default function Input({
  labelText = "Label Text",
  id = "__id",
  name = "__input",
  errorMessage,
  inputStyle,
  labelStyle,
  className,
  options,
  children,
}) {
  return (
    <div className={twMerge("relative flex flex-col", className)}>
      <label
        htmlFor={id}
        className={twMerge(
          `absolute -top-3 left-1 z-10 ${errorMessage ? "bg-red-50 text-red-500" : "bg-stone-50 text-stone-600"}  px-1 text-xs font-medium uppercase tracking-wide sm:text-sm `,
          labelStyle,
        )}
      >
        {errorMessage ? errorMessage : labelText}
      </label>
      <input
        type="text"
        className={twMerge(
          `rounded-sm border-b-2 border-b-slate-300 bg-slate-50 px-2 py-2 outline-none drop-shadow-md transition-all duration-200 hover:border-b-orange-300 focus:bg-orange-50`,
          inputStyle,
        )}
        id={id}
        name={name}
        {...options}
      />
      {children}
    </div>
  );
}
