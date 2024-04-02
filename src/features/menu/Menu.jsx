import { useSelector } from "react-redux";

import { getMenus } from "../../services/api/menu";
import { MenuItemDemo } from "./MenuItem";

import { store } from "../../store";

import { faker } from "@faker-js/faker";
import { addMenus } from "./menuSlice";

const Menu = () => {
  const menus = useSelector((state) => state.menu.menus);

  if (menus.length > 0)
    return (
      <div className="mx-auto mb-14 mt-8 max-w-5xl divide-y px-4">
        {menus.map((item) => (
          <MenuItemDemo key={item.id} menu={item} />
        ))}
      </div>
    );
  else
    return (
      <div className="mt-[4rem] w-full overflow-hidden">
        <h1 className="text-nowrap text-center text-5xl font-bold uppercase text-slate-700/20 md:text-[6rem]">
          Menu is Empty
        </h1>
      </div>
    );
};

// eslint-disable-next-line
export async function loader() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

  try {
    const data = await getMenus();
    return data;
  } catch (error) {
    const response = Array.from({ length: 5 }, () => ({
      id: faker.database.mongodbObjectId(),
      title: `${faker.hacker.adjective()} ${faker.hacker.noun()} `,
      price: Math.round(Math.random() * 450) + 200,
      description: faker.hacker.phrase().repeat(2),
    }));

    store.dispatch(addMenus(response));
    return response;
  }
}

export default Menu;
