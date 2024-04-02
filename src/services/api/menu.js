const API_URL = "http://localhost:4040/api/v1";

export const getMenus = async () => {
  const res = await fetch(`${API_URL}/menu`);
  if (!res.ok) throw new Error("Error while fetching menus");

  const { data } = await res.json();

  return data;
};
