import { Link } from "react-router-dom";
import Button from "../../../ui/Button";
import styles from "./EmptyOrders.module.scss";

const EmptyOrders = () => {
  return (
    <div className={styles.empty}>
      <div className={styles.content}>
        <div className={styles.emoji}>
          <img src="assets/images/empty-orders.png" alt="Empty orders" />
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>У вас нет заказов</h1>
          <h2 className={styles.subtitle}>
            Вы нищеброд?<br></br>Оформите хотя бы один заказ.
          </h2>
        </div>
      </div>
      <Link to={"/"}>
        <Button title={"Вернуться назад"} type={"back"} />
      </Link>
    </div>
  );
};

export default EmptyOrders;
