import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { clearCarts, getCarts } from "./cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const carts = useSelector(getCarts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartIsEmpty = carts.length == 0;
  return (
    <div>
      <section className="mx-auto max-w-5xl px-4">
        <header className="">
          {!cartIsEmpty && (
            <h1
              className="mb-4 mt-7 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-2xl font-semibold uppercase text-transparent md:text-3xl lg:text-4xl"
              style={{ lineHeight: "160%" }}
            >
              These are your amazing orders <br />
              Try ordering now &rarr;
            </h1>
          )}
          {cartIsEmpty && (
            <h1
              className="mb-4 mt-7 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-2xl font-semibold uppercase text-transparent md:text-3xl lg:text-4xl"
              style={{ lineHeight: "160%" }}
            >
              Your cart is empty, You did&apos;t ordered yet <br />
              <Button
                className="mt-5"
                options={{
                  onClick: () => {
                    navigate("/menu");
                  },
                }}
              >
                &larr; Try ordering now
              </Button>
            </h1>
          )}
        </header>
        <section className="flex flex-col divide-y">
          {carts.map((cart) => (
            <CartItem key={cart.id} cart={cart} />
          ))}
        </section>
        {!cartIsEmpty && (
          <section className="mb-5 mt-7 flex items-center gap-5">
            <Button
              options={{
                onClick: () => {
                  navigate("/order/new");
                },
              }}
              className="rounded-sm"
            >
              Order now
            </Button>
            <Button
              options={{
                onClick: () => {
                  dispatch(clearCarts());
                },
              }}
              className="rounded-sm bg-stone-200 text-stone-500 hover:bg-stone-300 hover:text-stone-700 focus:ring-stone-300"
            >
              Clear orders
            </Button>
          </section>
        )}
      </section>
    </div>
  );
};

export default Cart;
