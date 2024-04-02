import CartItem from "./CartItem";
import { getCarts } from "./cartSlice";
import { useSelector } from "react-redux";

const Cart = () => {
  const carts = useSelector(getCarts);
  return (
    <div>
      <section className="mx-auto max-w-5xl">
        <header className="">
          <h1
            className="mb-4 ml-4 mt-7 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-2xl font-semibold uppercase text-transparent md:text-3xl lg:text-4xl"
            style={{ lineHeight: "160%" }}
          >
            These are your amazing orders <br />
            Try ordering now &rarr;
          </h1>
        </header>
        <section className="flex flex-col divide-y px-4">
          {carts.map((cart) => (
            <CartItem key={cart.id} cart={cart} />
          ))}
        </section>
      </section>
    </div>
  );
};

export default Cart;
