import { Link } from "react-router-dom";
import Navigation from "../Navigation";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to={"/"} className={styles.logo}>
        <img src="assets/logo.svg" alt="logo" />
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;
