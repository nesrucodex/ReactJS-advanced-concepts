import { useSelector } from "react-redux";
import { formatPrice } from "../../utils/formatter";

const Orders = () => {
  const orders = useSelector((state) => state.order.orders);

  return (
    <div>
      <section className="max-w-5xl mx-auto px-4">
      <header className="">
        <h1
          className="mb-4 mt-7 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-2xl font-semibold uppercase text-transparent md:text-3xl lg:text-4xl"
          style={{ lineHeight: "160%" }}
        >
          These are your amazing orders <br />
          &larr; Try ordering more
        </h1>
      </header>

      <section className="mb-10 flex flex-col divide-y">
        {orders.map((order) => (
          <div key={order.id} className="px-3  py-2">
            <header className="flex justify-between items-center">
              <h1 className="mb-3 mt-2 text-xl font-semibold italic text-stone-700 md:text-2xl">
                #{order.id}
              </h1>

              <span className="text-stone-400 italic">12/02/2024 03:20PM</span>
            </header>
            <ul className="list-disc pl-5 capitalize text-stone-600">
              {order.carts.map((cart) => (
                <li className="list-inside" key={cart.id}>
                  {cart.title} {cart.quantity}x
                </li>
              ))}
            </ul>

            <p className="mt-5 font-medium  text-stone-600 text-lg">
              Total Cost:{" "}
              <span>
                {formatPrice(
                  order.carts.reduce((total, cart) => {
                    return total + cart.price * cart.quantity;
                  }, 0),
                )}
              </span>
            </p>
          </div>
        ))}
      </section>

      </section>
    </div>
  );
};

export default Orders;
