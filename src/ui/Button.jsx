import { any, node, string } from "prop-types";
import { twMerge } from "tailwind-merge";

const Button = ({ children, className, options }) => {
  return (
    <button
      className={twMerge(
        "rounded-sm bg-orange-500 px-4 py-2.5 text-sm font-medium uppercase tracking-wide text-orange-50 outline-none transition-all duration-200 hover:bg-orange-500/90 focus:ring focus:ring-orange-500 focus:ring-offset-2 md:py-3 ",
        className,
      )}
      {...options}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: node,
  options: any,
  className: string,
};

export default Button;
