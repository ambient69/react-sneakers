import DefaultDrawer from "./DefaultDrawer";
import styles from "./Drawer.module.scss";
import EmptyDrawer from "./EmptyDrawer";
import SuccsesfulDrawer from "./SuccsesfulDrawer";
import { useDrawer } from "../../hooks/useDrawer";

const Drawer = () => {
  const { status, handlerAreaDrawer, cart, handlerDrawer } = useDrawer();

  return (
    <div
      className={styles.overlay}
      onClick={handlerAreaDrawer}
      data-drawer={cart.status}
    >
      <div className={styles.drawer}>
        <div className={styles.nav}>
          <h1 className={styles.title}>Корзина</h1>
          <img
            src="assets/icons/remove.svg"
            alt=""
            onClick={() => handlerDrawer()}
          />
        </div>
        {status ? (
          <SuccsesfulDrawer />
        ) : cart.data.length ? (
          <DefaultDrawer />
        ) : (
          <EmptyDrawer />
        )}
      </div>
    </div>
  );
};

export default Drawer;
