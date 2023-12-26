import styles from "./EmptyDrawer.module.scss";
import Button from "../../../ui/Button";
import { useDrawer } from "../../../hooks/useDrawer";

const EmptyDrawer = () => {
  const { handlerDrawer } = useDrawer();

  return (
    <div className={styles.content}>
      <div className={styles.img}>
        <img src="assets/images/package.png" alt="Cart is Empty" />
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>Корзина пустая</h1>
        <p className={styles.description}>
          Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
        </p>
      </div>
      <Button title={"Вернуться назад"} type={"back"} event={handlerDrawer} />
    </div>
  );
};

export default EmptyDrawer;
