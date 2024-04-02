import { Form, redirect, useActionData } from "react-router-dom";
import Input from "../../ui/Input";

import { useSelector } from "react-redux";
import Button from "../../ui/Button";

import { store } from "../../store";
import { addOrder } from "./orderSlice";

import { faker } from "@faker-js/faker";
import { clearCarts } from "../cart/cartSlice";

const CreateOrder = () => {
  const errorData = useActionData();
  const userName = useSelector((state) => state.user.name);
  const carts = useSelector((state) => state.cart.carts);
  return (
    <div className="mx-auto max-w-2xl px-2">
      <header className="">
        <h1
          className="mb-8 mt-7 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-2xl font-semibold uppercase text-transparent md:text-3xl lg:text-4xl"
          style={{ lineHeight: "160%" }}
        >
          To get your amazing orders <br />
          Fill Provided Fields &rarr;
        </h1>
      </header>

      <Form method="POST" className="flex flex-col gap-6 px-3">
        <Input
          id="name"
          name="name"
          labelText="User name"
          errorMessage={errorData?.name}
          options={{ defaultValue: userName }}
        />
        <Input
          id="phone"
          name="phone"
          labelText="User Phone"
          errorMessage={errorData?.phone}
        />
        <Input
          id="address"
          name="address"
          className="relative"
          labelText="User address"
          errorMessage={errorData?.address}
        >
          <input type="hidden" value={JSON.stringify(carts)} name="carts" />
          <button
            className="acitve:bg-orange-500 absolute right-0 top-0 z-10 bg-orange-500 px-5 py-2 font-medium text-orange-50 drop-shadow-sm transition-all duration-200 hover:bg-orange-500/90"
            type="button"
          >
            Get GPS Address
          </button>
        </Input>

        <Button className="mt-5">Order now</Button>
      </Form>
    </div>
  );
};

export async function action({ request }) {
  const formData = await request.formData();

  const data = Object.fromEntries(formData);

  const carts = JSON.parse(data.carts);

  let errorData = {};

  if (!data.name) errorData.name = "Name is required";
  if (!data.phone) errorData.phone = "Phone number is required";
  if (!data.address) errorData.address = "Address is required";

  if (carts.length === 0) {
    errorData = {
      name: "You can't order, because your cart is empty, order meals first!",
      phone: "You can't order, because your cart is empty, order meals first!",
      address:
        "You can't order, because your cart is empty, order meals first!",
    };
  }

  if (Object.keys(errorData).length > 0) return errorData;

  store.dispatch(
    addOrder({
      id: faker.database.mongodbObjectId(),
      carts: carts,
      phone: data.phone,
      position: {},
      address: data.address,
    }),
  );
  store.dispatch(clearCarts());

  return redirect("/orders");
}

export default CreateOrder;
