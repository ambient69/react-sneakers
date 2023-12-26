import React from 'react';
import axios from 'axios';

import Info from './Info';
import AppContext from '../context';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items = [] }) {
  const { cartItems, setCartItems } = React.useContext(AppContext);

  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const inClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post('https://61e182c263f8fc0017618cb3.mockapi.io/orders', {
        items: cartItems,
      });
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(`https://61e182c263f8fc0017618cb3.mockapi.io/cart/${item.id}`);
        await delay(1000);
      }
    } catch (error) {
      alert('Ошибка при создании заказа');
    }
    setIsLoading(false);
  };

  return (
    <div className="overlay">
      <div className="drawer d-flex flex-column">
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img
            onClick={onClose}
            src="/img/btn-remove.svg"
            alt="Закрыть"
            className="removeBtn cu-p"
          />
        </h2>

        {items.length > 0 ? (
          <div className="d-flex flex-column justify-between h100p">
            <div className="items flex">
              {items.map((obj) => (
                <div key={obj.id} className="cartItem d-flex align-center mb-20">
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"></div>
                  <div className="mr-15 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    src="/img/btn-remove.svg"
                    alt="Remove"
                    className="removeBtn"
                    onClick={() => onRemove(obj.id)}
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>21 498 руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1 074 руб.</b>
                </li>
              </ul>
              <button disabled={isLoading} onClick={inClickOrder} className="greenButton">
                Оформить заказ
                <img src="/img/arrow.svg" alt="" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
            description={
              isOrderComplete
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
            }
            image={isOrderComplete ? '/img/complete-order.png' : '/img/empty-cart.jpg'}
          />
          // <div className="cartEmpty d-flex align-center flex-column flex justify-center ">
          //   <img width={120} height={120} src="/img/empty-cart.jpg" alt="Empty Cart" />
          //   <h2> Корзина пустая</h2>
          //   <p className="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
          //   <button onClick={onClose} className="greenButton">
          //     <img src="/img/arrow.svg" alt="Arrow" />
          //     Вернуться назад
          //   </button>
          // </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
