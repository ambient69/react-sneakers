import React from 'react';
import styles from './Card.module.scss';

const Card = (props) => {
  const onClickButton = () => {
    return alert('123');
  };

  return (
    <div className={styles.card}>
      <div className="favorite">
        <img src="img/heart-unliked.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <button onClick={onClickButton} className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
};

export default Card;
