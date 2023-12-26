import { useContext } from "react";
import { AppContext } from "../context";
import axios from "axios";
import { API, API2 } from "../components/App";

export const useDrawer = () => {
  const { cart, setCart, orders, setStatus, status } = useContext(AppContext);

  const handlerAreaDrawer = (e) => {
    if (!e.target.dataset.drawer) return null;
    setCart((prev) => ({
      ...prev,
      status: (prev.status = false),
    }));
    setTimeout(() => setStatus(false), 300);
  };

  const handlerDrawer = () => {
    setCart((prev) => ({ ...prev, status: false }));
    setTimeout(() => setStatus(false), 300);
  };

  const hadlerOrder = async () => {
    try {
      await axios.post(`${API2}/orders`, { items: cart.data }).catch((e) => {
        throw new Error(e);
      });
    } catch (error) {
      return error;
    }
  };

  const handlerRemoveItems = async () => {
    try {
      await hadlerOrder().catch((e) => {
        throw new Error(e);
      });

      for (const item of cart.data) {
        await axios
          .delete(`https://6543a8f001b5e279de20c076.mockapi.io/cart/${item.id}`)
          .catch((e) => {
            throw new Error(e);
          });
      }

      setCart((prev) => ({ ...prev, data: [] }));
    } catch (error) {
      return error;
    }

    setStatus(true);
  };

  const removeItem = async (id, parentId) => {
    try {
      const response = await axios.get(`${API}cart`).catch((e) => {
        throw new Error(e);
      });
      const filterId = response.data.filter((item) => +item.id === +id);

      await axios.delete(`${API}cart/${filterId[0].id}`).catch((e) => {
        throw new Error(e);
      });

      setCart((prev) => ({
        ...prev,
        data: prev.data.filter((item) => item.id !== parentId),
      }));
    } catch (error) {
      return error;
    }
  };

  return {
    status,
    setStatus,
    handlerDrawer,
    cart,
    setCart,
    handlerRemoveItems,
    removeItem,
    handlerAreaDrawer,
    orders,
  };
};
