import { useSelector } from "react-redux";
import { formatPrice } from "../../utils/formatter";
import { useFetcher } from "react-router-dom";
import { useEffect } from "react";

const Orders = () => {
  const orders = useSelector((state) => state.order.orders);

  const fetcher = useFetcher();
  useEffect(() => {
    if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
  }, [fetcher]);

  return (
    <div>
      <section className="mx-auto max-w-5xl px-4">
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
            <div key={order.id} className="bg-stone-200/70  px-4 py-4">
              <header className="flex items-center justify-between">
                <h1 className="mb-3 mt-2 text-xl font-semibold italic text-stone-700 md:text-2xl">
                  #{order.id}
                </h1>

                <span className="italic text-stone-400">
                  12/02/2024 03:20PM
                </span>
              </header>
              <ul className="list-disc pl-5 capitalize text-stone-600">
                {order.carts.map((cart) => (
                  <li className="list-inside" key={cart.id}>
                    {cart.title} ({cart.quantity} *{" "}
                    {fetcher.data?.find((ele) => {
                      return ele.id === cart.id;
                    })?.price || (
                      <span className="animate-pulse">Loading...</span>
                    )}
                    )
                  </li>
                ))}
              </ul>

              <p className="mt-5  text-lg text-stone-600">
                Total cost &rarr;{" "}
                <span className="">
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
