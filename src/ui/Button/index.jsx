import styles from "./Button.module.scss";

const Button = ({ title, type, event }) => {
  return (
    <button className={styles.button} onClick={event ? event : null}>
      {type === "back" ? (
        <img
          src="assets/icons/btn-back-arrow.svg"
          className={styles.icon}
          alt="Button Arrow"
        />
      ) : (
        <div></div>
      )}
      <span className={styles.title}>{title}</span>
      {type === "forward" ? (
        <img
          src="assets/icons/btn-arrow.svg"
          className={styles.icon}
          alt="Button Arrow"
        />
      ) : (
        <div></div>
      )}
    </button>
  );
};

export default Button;
