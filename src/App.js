import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://65786626f08799dc80452e88.mockapi.io/items')
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  // Эффект для управления прокруткой страницы
  React.useEffect(() => {
    if (cartOpened) {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Очистка эффекта
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [cartOpened]);

  const onAddToCard = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(!cartOpened)} />}
      <Header onClickCart={() => setCartOpened(!cartOpened)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="img/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={() => console.log('Добавили закладки')}
              onPlus={onAddToCard}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
