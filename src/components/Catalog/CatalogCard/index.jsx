import styles from "./CatalogCard.module.scss";
import { useContext } from "react";
import { AppContext } from "../../../context";
import { useCart } from "../../../hooks/useCart";
import { useFavorites } from "../../../hooks/useFavorites";

const CatalogCard = ({ id, title, price, image, parentId, active, noUi }) => {
  const { isItemAdded, isItemFavorited } = useContext(AppContext);
  const { handlerCart } = useCart();
  const { handlerFavorite } = useFavorites();

  return (
    <div className={styles.card}>
      <div className={styles.top}>
        {noUi ? null : (
          <div
            className={styles.like}
            onClick={() =>
              handlerFavorite(id, title, price, image, parentId, active)
            }
          >
            <img
              src={`assets/icons/${
                isItemFavorited(id) || active
                  ? "favorited.svg"
                  : "not-favorited.svg"
              }`}
              alt="Like"
            />
          </div>
        )}
        <img src={image} className={styles.img} alt="Sneakers" />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.info}>
          <div className={styles.price}>
            <span>ЦЕНА:</span>
            <h1>{price} руб.</h1>
          </div>
          {noUi ? null : (
            <button
              className={styles.btn}
              onClick={() => handlerCart(id, title, price, image, parentId)}
            >
              <img
                src={`assets/icons/${
                  isItemAdded(id) ? "btn-complete.svg" : "btn-plus.svg"
                }`}
                alt="Button plus"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CatalogCard;
