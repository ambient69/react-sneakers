import styles from "./Drawer.module.scss";

function Drawer({ onClose, items, removeCartItems }) {
  return (
    <div className={styles.overlay}>
      <div className={`${styles.drawer} d-flex flex-column`}>
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <img
            onClick={onClose}
            className={styles.removeBtn}
            src="/img/remove-sneakers.svg"
            alt="Закрытие"
          />
        </h2>
        {items.length === 0 ? (
          <div className={styles.emptyCart}>
            <img width={120} height={120} src="/img/box.png" alt="Коробка" />
            <h3>Корзина пустая</h3>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button className="greenBtn" onClick={onClose}>
              Вернуться назад
              <img
                className="imgLeftArrow"
                src="/img/arrow-left.svg"
                alt="Стрелочка"
              />
            </button>
          </div>
        ) : (
          <div className={`${styles.container} d-flex flex-column`}>
            <div className={styles.items}>
              {items.map((obj, index) => (
                <div
                  className={`${styles.cartItem} d-flex align-center mb-20`}
                  key={index}
                >
                  <div
                    className={styles.cartImage}
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                  ></div>
                  <div className={`${styles.cartInfo} mr-20`}>
                    <p>{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    onClick={() => {
                      removeCartItems(obj.id);
                    }}
                    className={styles.removeBtn}
                    src="/img/remove-sneakers.svg"
                    alt="Удаление"
                  />
                </div>
              ))}
            </div>
            <div className={`${styles.price} d-flex flex-column`}>
              <ul>
                <li className="d-flex align-center mb-20">
                  <p>Итого:</p>
                  <div className={styles.dashedBorder}></div>
                  <b>21 498 руб.</b>
                </li>

                <li className="d-flex align-center">
                  <p>Налог 5%:</p>
                  <div className={styles.dashedBorder}></div>
                  <b>1074 руб.</b>
                </li>
              </ul>
              <button className="greenBtn">
                Оформить заказ
                <img
                  className="imgArrow"
                  src="/img/arrow.svg"
                  alt="Стрелочка"
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
