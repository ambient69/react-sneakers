import { Suspense, useEffect, useState } from "react";
import lazy from "@loadable/component";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContext } from "../../context";

import axios from "axios";
import Layout from "../Layout";

const Favorites = lazy(() =>
  import(/* webpackChunkName: "Favorites" */ "../../pages/Favorites")
);
const Orders = lazy(() =>
  import(/* webpackChunkName: "Orders" */ "../../pages/Orders")
);
const Home = lazy(() =>
  import(/* webpackChunkName: "Home" */ "../../pages/Home")
);

export const API = "https://6543a8f001b5e279de20c076.mockapi.io/";
export const API2 = "https://64fcc244605a026163aec998.mockapi.io/";

const App = () => {
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [orders, setOrders] = useState([]);
  const [cart, setCart] = useState({ data: [], status: false });
  const [isLoading, setIsLoading] = useState();
  const [status, setStatus] = useState(false);

  const isItemAdded = (id) => {
    return cart.data.some((obj) => +obj.parentId === +id);
  };

  const isItemFavorited = (id) => {
    return favorites.some((obj) => +obj.parentId === +id);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const cart = (
          await axios.get(`${API}/cart`).catch((e) => {
            throw new Error(e);
          })
        ).data;
        const orders = (
          await axios.get(`${API2}/orders`).catch((e) => {
            throw new Error(e);
          })
        ).data;
        const favorites = (
          await axios.get(`${API2}/favorites`).catch((e) => {
            throw new Error(e);
          })
        ).data;
        const sneakers = (
          await axios.get(`${API}/sneakers`).catch((e) => {
            throw new Error(e);
          })
        ).data;

        setIsLoading(false);

        setFavorites(favorites);
        setOrders(orders);
        setCart((prev) => ({ ...prev, data: cart }));
        setData(sneakers);
      } catch (error) {
        return error;
      }
    };

    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        status,
        setStatus,
        data,
        setData,
        favorites,
        setFavorites,
        orders,
        setOrders,
        cart,
        setCart,
        isItemAdded,
        isItemFavorited,
        isLoading,
        setIsLoading,
      }}
    >
      <BrowserRouter>
        <Suspense fallback="Loading...">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="favorites" element={<Favorites />} />
              <Route path="orders" element={<Orders />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
