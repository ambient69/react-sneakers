import Button from "../../../ui/Button";
import DrawerItem from "../DrawerItem";
import styles from "./DefaultDrawer.module.scss";
import { useCart } from "../../../hooks/useCart.js";
import { useDrawer } from "../../../hooks/useDrawer.js";

const DefaultDrawer = () => {
  const { tax, total, cart, setCart } = useCart();
  const { handlerRemoveItems } = useDrawer();

  return (
    <>
      <div className={styles.content}>
        {cart.data.map((item) => (
          <DrawerItem
            key={item.id}
            id={item.id}
            parentId={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            setCart={setCart}
          />
        ))}
      </div>
      <div className={styles.checkout}>
        <div className={styles.info}>
          <div className={styles.total}>
            <h1 className={styles.title}>Итого:</h1>
            <div className={styles.underline}></div>
            <h1 className={styles.price}>{total} руб.</h1>
          </div>
          <div className={styles.tax}>
            <h1 className={styles.title}>Налог 5%:</h1>
            <div className={styles.underline}></div>
            <h1 className={styles.price}>{tax} руб.</h1>
          </div>
        </div>
        <Button
          title={"Оформить заказ"}
          type={"forward"}
          event={() => handlerRemoveItems()}
        />
      </div>
    </>
  );
};

export default DefaultDrawer;
