import styles from "./Layout.module.scss";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import Drawer from "../Drawer";

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Outlet />
      <Drawer />
    </div>
  );
};

export default Layout;
