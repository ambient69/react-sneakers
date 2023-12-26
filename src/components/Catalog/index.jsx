import CatalogCard from "./CatalogCard";
import styles from "./Catalog.module.scss";
import Button from "../../ui/Button";
import { useContext, useState } from "react";
import { AppContext } from "../../context";

import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <div className={styles.loader}>
    <ContentLoader
      speed={2}
      width={"100%"}
      height={195}
      viewBox="0 0 100% 195"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="1" y="108" rx="3" ry="3" width="100%" height="15" />
      <rect x="1" y="131" rx="3" ry="3" width="100%" height="15" />
      <rect x="1" y="168" rx="8" ry="8" width="80" height="24" />
      <rect x="1" y="1" rx="10" ry="10" width="100%" height="91" />
    </ContentLoader>
  </div>
);

const Catalog = ({ filter }) => {
  const { data, isLoading } = useContext(AppContext);

  const step = 12;
  let [max, setMax] = useState(0);
  let filtredArray = data.filter(filter);
  const moreBtnRule =
    filtredArray.length - max < step
      ? (max = filtredArray.length - max + max)
      : (max += step);

  const renderCards = () => {
    return filtredArray
      .filter(filter)
      .slice(0, max)
      .map((sneaker) => (
        <CatalogCard
          key={sneaker.id}
          id={sneaker.id}
          parentId={sneaker.id}
          title={sneaker.title}
          price={sneaker.price}
          image={sneaker.image}
        />
      ));
  };

  return (
    <div className={styles.catalog}>
      <div className={styles.content}>
        {isLoading
          ? [...Array(20)].map((item, index) => <MyLoader key={index} />)
          : renderCards()}
      </div>

      {max !== filtredArray.length ? (
        <Button
          title={"Показать еще"}
          type={"default"}
          event={() => setMax(moreBtnRule)}
        />
      ) : null}
    </div>
  );
};

export default Catalog;
