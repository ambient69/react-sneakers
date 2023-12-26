import { Link } from "react-router-dom";
function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="логотип" />
          <div>
            <h3 className="text-uppercase">REACT SNEAKERS</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li
          onClick={props.onClickOpenCart}
          className="mr-30 cu-p d-flex align-center"
        >
          <img
            className="mr-10"
            width={18}
            height={18}
            src="/img/basket.svg"
            alt="корзина"
          />
          <span>1205 руб.</span>
        </li>
        <Link to="/favorites">
          <li className="mr-30 cu-p d-flex align-center">
            <img
              className="mr-10"
              width={18}
              height={18}
              src="/img/like.svg"
              alt="лайк"
            />
            <span>Закладки</span>
          </li>
        </Link>
        <li className="d-flex cu-p align-center">
          <img
            className="mr-10"
            width={18}
            height={18}
            src="/img/profile.svg"
            alt="иконка-профиля"
          />
          <span>Профиль</span>
        </li>
      </ul>
    </header>
  );
}

export default Header;
