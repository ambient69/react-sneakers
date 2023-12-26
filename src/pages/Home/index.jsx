import { useState } from "react";
import Banner from "../../components/Banner";
import Catalog from "../../components/Catalog";
import Input from "../../ui/Input";
import styles from "./Home.module.scss";

const Home = () => {
  const [value, setValue] = useState("");

  const handlerInput = (e) => {
    setValue(e.target.value);
  };

  const filter = (item) =>
    item.title.toLowerCase().includes(value.toLowerCase());

  return (
    <main className={styles.home}>
      <Banner />
      <div className={styles.content}>
        <div className={styles.nav}>
          <h1 className={styles.title}>Все кроссовки</h1>
          <Input value={value} event={handlerInput} />
        </div>
        <Catalog filter={filter} />
      </div>
    </main>
  );
};

export default Home;
