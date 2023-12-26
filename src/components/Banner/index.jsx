import Slider from "react-slick";

import styles from "./Banner.module.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerArrow = ({ type, className, onClick, style }) => {
  return (
    <>
      {type ? (
        <img
          src="assets/icons/arrow-next.svg"
          alt="next"
          className={className}
          onClick={onClick}
          style={style}
        />
      ) : (
        <img
          src="assets/icons/arrow-prev.svg"
          alt="prev"
          className={className}
          onClick={onClick}
          style={style}
        />
      )}
    </>
  );
};

const Banner = () => {
  const settings = {
    arrows: true,
    nextArrow: <BannerArrow type={true} />,
    prevArrow: <BannerArrow type={false} />,
  };

  return (
    <Slider className={styles.slider} {...settings}>
      <div className={styles.item}>
        <img src="assets/banners/adidas.png" alt="Adidas's Banner" />
      </div>
      <div className={styles.item}>
        <img src="assets/banners/adidas.png" alt="Adidas's Banner" />
      </div>
      <div className={styles.item}>
        <img src="assets/banners/adidas.png" alt="Adidas's Banner" />
      </div>
    </Slider>
  );
};

export default Banner;
