import { useContext } from "react";
import CatalogCard from "../../components/Catalog/CatalogCard";
import styles from "./Orders.module.scss";
import { AppContext } from "../../context";
import EmptyOrders from "./EmptyOrders";

const Orders = () => {
  const { orders } = useContext(AppContext);

  return (
    <div className={styles.orders}>
      {orders.length > 0 ? (
        <div className={styles.content}>
          {orders.map((index) =>
            index.items.map((item) => (
              <CatalogCard
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                parentId={item.id}
                noUi={true}
              />
            ))
          )}
        </div>
      ) : (
        <EmptyOrders />
      )}
    </div>
  );
};

export default Orders;
