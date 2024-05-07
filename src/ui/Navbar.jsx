import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux";

const Navbar = () => {
  const name = useSelector((state) => state.user.name);
  const cartCount = useSelector(state => state.cart.carts.length)
  return (
    <nav className="flex h-nav grow items-center justify-between">
      <h1>
        <NavLink
          to="/"
          className="text-lg font-semibold tracking-wide text-slate-700 transition-all duration-200 hover:text-orange-400 active:text-orange-200"
        >
          F@Pizza
        </NavLink>
      </h1>
      <ul className="flex items-center gap-5">
        <li>
          <NavLink
            className={(status) =>
              `text-lg font-semibold ${
                status.isActive ? "text-orange-600" : "text-slate-700"
              } active:text-orange-404/90 tracking-wide transition-all
              duration-200 hover:text-orange-400 `
            }
            to="/menu"
          >
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(status) =>
              `text-lg font-semibold ${
                status.isActive ? "text-orange-600" : "text-slate-700"
              } active:text-orange-404/90 tracking-wide transition-all
              duration-200 hover:text-orange-400 relative`
            }
            to="/cart"
          >
            Cart
            <span className="text-orange-500">[{cartCount}]</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(status) => `text-lg font-semibold ${
              status.isActive ? "text-orange-600" : "text-slate-700"
            } tracking-wide transition-all duration-200
                hover:text-orange-400 active:text-orange-400/90`}
            to="/orders"
          >
            Orders
          </NavLink>
        </li>
      </ul>

      {name && (
        <p className="grid size-[2.8rem] place-items-center rounded-full bg-orange-500 text-2xl font-bold tracking-wide text-white ring-[.2rem] ring-red-400 ring-offset-[.2rem]">
          {name[0].toUpperCase()}
        </p>
      )}
    </nav>
  );
};

export default Navbar;
