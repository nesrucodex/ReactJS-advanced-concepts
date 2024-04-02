import { any, node } from "prop-types";

const Button = ({ children, options }) => {
  const className =
    "rounded-sm bg-orange-500 px-4 py-2.5 md:py-3 text-sm md:text-base font-medium uppercase tracking-wide text-orange-50 outline-none transition-all duration-200 hover:bg-orange-500/90 focus:ring focus:ring-orange-500 focus:ring-offset-2 ";
  return (
    <button className={className} {...options}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: node,
  options: any,
};

export default Button;
