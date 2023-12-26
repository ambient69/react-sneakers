import { useContext } from "react";
import { AppContext } from "../context";
import axios from "axios";
import { API } from "../components/App";

export const useCart = () => {
  const { cart, setCart, isItemAdded } = useContext(AppContext);

  let percent = 0.05;
  let total = cart.data
    .map((item) => item.price)
    .reduce((acc, item) => acc + item, 0);
  let tax = Math.floor(total * percent);

  const handlerAddToCart = async (id, title, price, image, parentId) => {
    try {
      const item = await axios
        .post(`${API}/cart`, { id, title, price, image, parentId })
        .catch((e) => {
          throw new Error(e);
        });

      setCart((prev) => ({
        ...prev,
        data: [...prev.data, item.data],
      }));
    } catch (error) {
      return error;
    }
  };

  const handlerRemoveFromCart = async ({ id }) => {
    try {
      const response = await axios.get(`${API}cart`).catch((e) => {
        throw new Error(e);
      });
      const filterId = response.data.filter((item) => item.parentId === id);

      await axios.delete(`${API}cart/${filterId[0].id}`).catch((e) => {
        throw new Error(e);
      });

      setCart((prev) => ({
        ...prev,
        data: response.data.filter((item) => item.parentId !== id),
      }));
    } catch (error) {
      return error;
    }
  };

  const handlerCart = async (id, title, price, image, parentId) => {
    if (isItemAdded(id)) await handlerRemoveFromCart({ id });
    else await handlerAddToCart(id, title, price, image, parentId);
  };

  return { cart, setCart, total, tax, handlerCart };
};
