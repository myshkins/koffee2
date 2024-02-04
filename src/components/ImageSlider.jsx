import { useState } from "react";
import IconCircleChevLeft from "~icons/circum/circle-chev-left"
import IconCircleChevRight from "~icons/circum/circle-chev-right"
import ProductCard from "./ProductCard";

const ImageSlider = (props) => {
  const [activeCards, setActiveCards] = useState([...Array(props.length).keys()]);

  const scrollLeft = () => {
    if (activeCards[0] === 0) return;
    let newActiveCards = activeCards.map( i => i - 1)
    setActiveCards(newActiveCards)
  };

  const scrollRight = () => {
    if (activeCards[activeCards.length - 1] === props.productArray.length - 1) {
        return;}
    let newActiveCards = activeCards.map( i => i + 1)
    setActiveCards(newActiveCards)
  };

  return (
    <>
      <div className="shop-banner-wrap">
        <label htmlFor="shop-slide-left" id="shop-slide-label-left" onClick={scrollLeft}>
          <IconCircleChevLeft
            id="shop-slide-left"
            size={"3rem"}
            color="grey"
          />
        </label>
        <div className="slider-window">
            <ul className="shop-banner">
              {props.productArray.map((product, index) => (
                <ProductCard
                  title={product.title}
                  subtitle={product.subtitle}
                  img={product.img}
                  index={index}
                  activeIndices={activeCards}
                  key={`product-card-${index}`}
                />
              ))}
            </ul>
        </div>
        <label htmlFor="shop-slide-right" id="shop-slide-label-right" onClick={scrollRight}>
          <IconCircleChevRight
            id="shop-slide-right"
            size={"3rem"}
            color="grey"
          />
        </label>
      </div>
    </>
  );
};

export default ImageSlider;
