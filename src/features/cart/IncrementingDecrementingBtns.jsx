import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCartQuantity, increaseCartQuantity } from "./cartSlice";
const IncrementingDecrementingBtns = ({ cartId }) => {
  const dispatch = useDispatch();
  const quantity = useSelector(
    (state) => state.cart.carts.find((cart) => cart.id === cartId).quantity,
  );
  return (
    <div className="flex select-none items-center gap-3 md:gap-5">
      <span
        className="grid size-[2rem] place-items-center rounded-full bg-green-400"
        onClick={() => dispatch(increaseCartQuantity(cartId))}
      >
        <FaPlus className="cursor-pointer text-lg text-white transition-all duration-200 hover:scale-110 active:scale-100 md:text-xl " />
      </span>
      <span className="grid size-[2rem] place-items-center  rounded-full font-medium text-stone-700 ring ring-sky-400">
        {quantity}
      </span>
      <span
        className="grid size-[2rem] place-items-center rounded-full bg-yellow-400"
        onClick={() => dispatch(decreaseCartQuantity(cartId))}
      >
        <FaMinus className="cursor-pointer text-lg text-white transition-all duration-200 hover:scale-110 active:scale-100 md:text-xl " />
      </span>
    </div>
  );
};

import { string } from "prop-types";

IncrementingDecrementingBtns.propTypes = {
  cartId: string,
};
export default IncrementingDecrementingBtns;
