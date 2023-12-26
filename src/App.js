import React from "react";
import axios from "axios";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Drawer from "./components/Drawer/Drawer";
import Favorites from "./pages/Favorites/Favorites";
import Home from "./pages/Home";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setIsfavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [isCartOpened, setIsCartOpened] = React.useState(false);

  const getItems = () => {
    axios.get("https://dbb7a389e00c56d3.mokky.dev/items").then((res) => {
      setItems(res.data);
    });
  };

  const getFavorites = () => {
    axios.get("https://dbb7a389e00c56d3.mokky.dev/favorites").then((res) => {
      setIsfavorites(res.data);
    });
  };

  const getCartItems = () => {
    axios.get("https://dbb7a389e00c56d3.mokky.dev/cart").then((res) => {
      setCartItems(res.data);
    });
  };

  const removeCartItems = (id) => {
    axios.delete(`https://dbb7a389e00c56d3.mokky.dev/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  React.useEffect(() => {
    getItems();
    getCartItems();
    getFavorites();
  }, []);

  const onAddtoCart = (obj) => {
    axios.post("https://dbb7a389e00c56d3.mokky.dev/cart", obj).then((res) => {
      setCartItems((prev) => [...prev, res.data]);
    });
  };

  const onFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://dbb7a389e00c56d3.mokky.dev/favorites/${obj.id}`);
        setIsfavorites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        const { data } = await axios.post(
          "https://dbb7a389e00c56d3.mokky.dev/favorites",
          obj
        );
        setIsfavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      console.log("Не удалось добавить в фавориты");
    }
  };

  const onChangeSearchInput = (evt) => {
    setSearchValue(evt.target.value);
  };

  return (
    <div className="wrapper clear">
      {isCartOpened && (
        <Drawer
          onClose={() => setIsCartOpened(false)}
          items={cartItems}
          removeCartItems={removeCartItems}
        />
      )}
      <Header onClickOpenCart={() => setIsCartOpened(true)} />
      <Routes>
        <Route
          path="favorites"
          element={
            <Favorites
              items={favorites}
              onPlus={onAddtoCart}
              onFavorite={onFavorite}
            />
          }
        ></Route>

        <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddtoCart={onAddtoCart}
              onFavorite={onFavorite}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
