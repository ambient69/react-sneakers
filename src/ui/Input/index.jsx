import styles from "./Input.module.scss";

const Input = ({ value, event }) => {
  return (
    <div className={styles.inputBlock}>
      <img src="assets/icons/search.svg" alt="Search" className={styles.icon} />
      <input
        type="text"
        value={value}
        onChange={(e) => event(e)}
        placeholder="Поиск..."
        className={styles.input}
      />
    </div>
  );
};

export default Input;
