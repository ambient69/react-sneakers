import { Link } from "react-router-dom";
import Button from "../../../ui/Button";
import styles from "./EmptyFavorites.module.scss";

const EmptyFavorites = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.emoji}>
          <img src="assets/images/empty-favorites.png" alt="Empty favorites" />
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>Закладок нет :(</h1>
          <h2 className={styles.subtitle}>Вы ничего не добавляли в закладки</h2>
        </div>
      </div>
      <Link to={"/"}>
        <Button title={"Вернуться назад"} type={"back"} />
      </Link>
    </>
  );
};

export default EmptyFavorites;
