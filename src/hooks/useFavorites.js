import { useContext } from "react";
import { AppContext } from "../context";
import { API2 } from "../components/App";
import axios from "axios";

export const useFavorites = () => {
  const { setFavorites, isItemFavorited } = useContext(AppContext);

  const handlerAddToFavorite = async (id, title, price, image, parentId) => {
    try {
      const item = await axios
        .post(`${API2}/favorites`, { id, title, price, image, parentId })
        .catch((e) => {
          throw new Error(e);
        });

      setFavorites((prev) => [...prev, item.data]);
    } catch (error) {
      return error;
    }
  };

  const handlerRemoveFromFavorite = async (active, id) => {
    try {
      const response = await axios.get(`${API2}favorites`).catch((e) => {
        throw new Error(e);
      });

      let filterId = response.data.filter((item) => +item.parentId === +id);
      if (active) {
        filterId = response.data.filter((item) => +item.id === +id);
      }

      await axios.delete(`${API2}favorites/${filterId[0].id}`).catch((e) => {
        throw new Error(e);
      });

      if (active) {
        setFavorites(response.data.filter((item) => item.id !== id));
      } else {
        setFavorites(response.data.filter((item) => item.parentId !== id));
      }
    } catch (error) {
      return error;
    }
  };

  const handlerFavorite = async (id, title, price, image, parentId, active) => {
    if (isItemFavorited(parentId) || active)
      await handlerRemoveFromFavorite(active, id);
    else await handlerAddToFavorite(id, title, price, image, parentId);
  };

  return { handlerFavorite };
};
