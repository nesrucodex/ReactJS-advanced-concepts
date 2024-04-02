import { Form, useActionData, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import Input from "./Input";
import { useRef } from "react";

import { motion } from "framer-motion";
import { updateName } from "../features/user/userSlice";

const Home = () => {
  const btnRef = useRef();
  const data = useActionData();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const name = useSelector((state) => state.user.name);
  return (
    <div className="">
      <header className="text-center">
        <h1
          className="mb-4 mt-7 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-2xl font-semibold uppercase text-transparent md:text-3xl lg:text-4xl"
          style={{ lineHeight: "160%" }}
        >
          Welcome to our fast pizza
        </h1>
        {name === "" && (
          <h2 className="text-lg text-stone-700 md:text-xl lg:text-2xl">
            Start ordering our pizza by typing your name first?
          </h2>
        )}

        {name === "" && (
          <Form method="POST" className="mx-auto mt-14 max-w-lg">
            <Input
              labelText={"Enter your name"}
              errorMessage={data?.error}
              id="name"
              name="name"
              inputStyle="py-3.5 rounded-full pl-4"
              labelStyle="left-2 text-orange-500"
              options={{
                onChange: () => {
                  btnRef.current?.click();
                },
              }}
            />
            <button type="submit" ref={btnRef} className="hidden" />
          </Form>
        )}

        {name !== "" && (
          <button
            className="mt-7 rounded-full bg-orange-500 px-7 py-3 font-semibold uppercase tracking-wide text-orange-50 transition-all duration-200 hover:animate-none hover:bg-orange-500/90 active:bg-orange-500"
            onClick={() => {
              navigate("/menu");
            }}
          >
             Continue ordering pizza, {name}
          </button>
        )}

        {data?.name && (
          <motion.button
            initial={{ y: 0 }}
            animate={{ y: [-30, 30] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 1,
              type: "tween",
            }}
            className="mt-10 rounded-full bg-orange-500 px-12 py-5 text-lg font-semibold uppercase tracking-wide text-orange-50 transition-all duration-200 hover:animate-none hover:bg-orange-500/90 active:bg-orange-500"
            onClick={() => {
              if (!data?.name) return;

              dispatch(updateName(data.name));
              navigate("/menu");
            }}
          >
            Order now
          </motion.button>
        )}
      </header>
    </div>
  );
};

export async function action({ request }) {
  const response = await request.formData();
  const data = Object.fromEntries(response);

  if (data?.name?.trim().length > 3) return data;
  else return { error: "Please provide valid name!" };
}

export default Home;
