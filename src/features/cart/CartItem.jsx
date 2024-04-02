import { shape, string, number } from "prop-types";
import { FaTimes } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { removeCart } from "./cartSlice";
import IncrementingDecrementingBtns from "./IncrementingDecrementingBtns";

const CartItem = ({ cart }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex select-none items-center justify-between  px-4 py-3">
      <div className="flex items-baseline gap-4">
        <p className=" flex cursor-pointer  items-center text-stone-700">
          <span className="text-lg font-semibold md:text-xl">
            {cart.quantity}
          </span>
          <FaTimes className="text-xs text-orange-500" />
        </p>
        <h1 className=" font-medium capitalize text-stone-700 md:text-lg">
          {cart.title}
        </h1>
      </div>
      <div className="flex items-center gap-[5rem]">
        <p className=" font-medium capitalize text-stone-700 md:text-lg">
          {" "}
          {Intl.NumberFormat("eth", {
            style: "currency",
            currency: "ETB",
          }).format(cart.price * cart.quantity)}
        </p>
        <div className="flex items-center gap-3 md:gap-5">
          <IncrementingDecrementingBtns cartId={cart.id} />
          <span className="grid size-[2rem] place-items-center rounded-full bg-red-400">
            <FaTimes
              className="cursor-pointer text-lg text-white transition-all duration-200 hover:scale-110 active:scale-100 md:text-xl "
              onClick={() => dispatch(removeCart(cart.id))}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  cart: shape({
    title: string,
    price: number,
    quantity: number,
  }),
};

export default CartItem;
