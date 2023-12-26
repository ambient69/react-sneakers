import styles from "./DrawerItem.module.scss";
import { useDrawer } from "../../../hooks/useDrawer";

const DrawerItem = ({ id, title, image, price, parentId }) => {
  const { removeItem } = useDrawer();

  return (
    <div className={styles.item}>
      <div className={styles.img}>
        <img src={image} alt="Sneakers" />
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <h1 className={styles.price}>{price} руб.</h1>
      </div>
      <button className={styles.btn} onClick={() => removeItem(parentId, id)}>
        <img src="assets/icons/remove.svg" alt="Remove Item" />
      </button>
    </div>
  );
};

export default DrawerItem;
