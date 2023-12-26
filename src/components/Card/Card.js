import React from "react";
import styles from "./Card.module.scss";

function Card({
  title,
  price,
  imageUrl,
  id,
  onPlus,
  onFavorite,
  favorited = false,
}) {
  const [plusImageUrl, setPlusImageUrl] = React.useState("/img/plus.svg");
  const [isBtnChecked, setBtnIsChecked] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  React.useEffect(() => {
    if (!isBtnChecked) {
      setPlusImageUrl("/img/plus.svg");
    } else {
      setPlusImageUrl("/img/btn-checked.svg");
    }
  }, [isBtnChecked]);

  const onClickFavorite = () => {
    console.log(id)
    onFavorite({ title, price, imageUrl, id });
    setIsFavorite(!isFavorite);
  };

  const onClickPlus = () => {
    onPlus({ title, price, imageUrl, id });
    setBtnIsChecked(!isBtnChecked);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          onClick={onClickFavorite}
          src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"}
          alt="Отсутствие лайка"
        />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <button
          onClick={onClickPlus}
          className={`${styles.button} ${
            isBtnChecked ? styles.button_background_green : ""
          }`}
        >
          <img src={plusImageUrl} alt="плюс" />
        </button>
      </div>
    </div>
  );
}

export default Card;
