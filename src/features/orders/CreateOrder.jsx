import { Form, redirect, useActionData } from "react-router-dom";
import Input from "../../ui/Input";


const CreateOrder = () => {
  const errorData = useActionData();
  return (
    <div className="mx-auto max-w-2xl px-2">
      <h1 className="mb-8 mt-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-2xl font-semibold uppercase text-transparent md:text-3xl lg:text-4xl">
        Create your Order&apos;s
      </h1>

      <Form method="POST" className="flex flex-col gap-6 px-3">
        <Input
          id="name"
          name="name"
          labelText="User name"
          errorMessage={errorData?.name}
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
          labelText="User address"
          errorMessage={errorData?.address}
        />

        <button className="mt-4 rounded-sm bg-orange-400 py-2 font-semibold uppercase tracking-wide  text-orange-50">
          Order now
        </button>
      </Form>
    </div>
  );
};

export async function action({ request }) {
  const formData = await request.formData();

  const data = Object.fromEntries(formData);

  const errorData = {};

  if (!data.name) errorData.name = "Name is required";
  if (!data.phone) errorData.phone = "Phone number is required";
  if (!data.address) errorData.address = "Address is required";

  if (Object.keys(errorData).length > 0) return errorData;

  return redirect("/");
}

export default CreateOrder;
