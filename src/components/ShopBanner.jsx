import "./ShopBanner.css";
import ImageSlider from "./ImageSlider";

const ShopBanner = (props) => {
  return (
    <>
      <ImageSlider length={3} productArray={props.productArray} />
    </>
  );
};

export default ShopBanner;
