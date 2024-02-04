// import MediaQuery from "react-responsive";
import "./ShopBanner.css";
import ProductCard from "./ProductCard";
import ImageSlider from "./ImageSlider";

const ShopBanner = (props) => {

  const productList = (
    <ul className="shop-banner">
      {props.productArray.map((product, index) => (
        <ProductCard
          title={product.title}
          subtitle={product.subtitle}
          img={product.img}
          key={`product-card-${index}`}
        />
      ))}
    </ul>
  );

  return (
    <>
      {/* <MediaQuery maxWidth={800}> */}
      {/*   <div className="shop-banner-wrap">{productList}</div> */}
      {/* </MediaQuery> */}

      {/* <MediaQuery minWidth={801}> */}
      <ImageSlider length={3} productArray={props.productArray} />
      {/* </MediaQuery> */}
    </>
  );
};

export default ShopBanner;
