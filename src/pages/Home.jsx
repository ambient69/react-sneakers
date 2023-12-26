import Card from "../components/Card/Card";

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddtoCart,
  onFavorite,
}) {
  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}
        </h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Поиск" />
          {searchValue && (
            <img
              onClick={() => {
                setSearchValue("");
              }}
              className="clear"
              src="/img/remove-sneakers.svg"
              alt="Отчистка инпута"
            />
          )}
          <input
            value={searchValue}
            onChange={onChangeSearchInput}
            placeholder="Поиск..."
          ></input>
        </div>
      </div>
      <div className="cardTable d-flex flex-wrap">
        {items
          .filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item, index) => (
            <Card
              key={index}
              onPlus={onAddtoCart}
              onFavorite={onFavorite}
              {...item}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
