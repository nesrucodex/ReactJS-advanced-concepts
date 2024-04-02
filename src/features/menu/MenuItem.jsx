import { string, shape, number, arrayOf } from "prop-types";
import { formatPrice } from "../../utils/formatter";
import Button from "../../ui/Button";

import { useDispatch, useSelector } from "react-redux";

import { FaImage, FaTimes } from "react-icons/fa";

MenuItem.propTypes = {
  menu: shape({
    imgURL: string,
    name: string,
    price: number,
    ingredient: arrayOf(string),
  }),
};
function MenuItem({ menu }) {
  return (
    <div>
      <img src={menu.imgURL} alt="Pizza image" className="max-w-[24rem]" />
      <h2 className="mb-2 mt-2 text-lg font-semibold tracking-wider text-slate-700">
        {menu.name}
      </h2>
      <p className="mb-2 font-semibold text-red-400">
        {formatPrice(menu.price)}
      </p>
      <p className="text-[.9rem] font-semibold text-slate-700 ">
        {menu.ingredient.join(", ")}
      </p>
    </div>
  );
}

import { any } from "prop-types";
import { addCart, getCarts, removeCart } from "../cart/cartSlice";
import IncrementingDecrementingBtns from "../cart/IncrementingDecrementingBtns";
MenuItemDemo.propTypes = {
  menu: any,
};

export function MenuItemDemo({ menu }) {
  const dispatch = useDispatch();
  const carts = useSelector(getCarts);
  return (
    <div className="flex flex-col items-start gap-4 px-4 py-4 sm:flex-row sm:items-stretch">
      <div className="grid aspect-[5/4] w-full place-items-center bg-stone-200/60 sm:w-[25rem] md:w-[30rem] lg:w-[35rem]">
        <FaImage size={120} className="text-stone-300/80" />
      </div>
      <div className="shrink-4 flex w-full flex-col ">
        <h1 className="mb-2 text-xl font-medium uppercase text-stone-700">
          {menu.title}
        </h1>
        <p className="mb-10 line-clamp-3 text-balance text-stone-500 md:line-clamp-none">
          {menu.description}
        </p>
        <div className="mt-auto flex h-[3rem] items-start justify-between">
          <p className="font-medium text-stone-600 ">
            {Intl.NumberFormat("eth", {
              style: "currency",
              currency: "ETB",
            }).format(menu.price)}
          </p>
          {!carts.map((cart) => cart.id).includes(menu.id) && (
            <Button
            className="rounded-full"
              options={{
                onClick: () => {
                  dispatch(addCart(menu));
                },
              }}
            >
              Add to Cart
            </Button>
          )}
          {carts.map((cart) => cart.id).includes(menu.id) && (
            <div className="flex items-center gap-3 md:gap-5">
              <IncrementingDecrementingBtns cartId={menu.id} />
              <span className="grid size-[2rem] place-items-center rounded-full bg-red-400">
                <FaTimes
                  className="cursor-pointer text-lg text-white transition-all duration-200 hover:scale-110 active:scale-100 md:text-xl "
                  onClick={() => dispatch(removeCart(menu.id))}
                />
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
