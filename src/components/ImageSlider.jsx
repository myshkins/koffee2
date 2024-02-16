import { useState } from "react";
import IconCircleChevLeft from "~icons/circum/circle-chev-left"
import IconCircleChevRight from "~icons/circum/circle-chev-right"
import ProductCard from "./ProductCard";
import { MediaContextProvider, Media } from "./Media";

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
        <MediaContextProvider>
          <Media greaterThan="md">
            <label htmlFor="shop-slide-left" id="shop-slide-label-left" onClick={scrollLeft}>
              <IconCircleChevLeft
                id="shop-slide-left"
                className="slide-chevron"
                // style={{ fontSize: '3rem', color: 'grey' }}
              />
            </label>
          </Media>
        </MediaContextProvider>
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
          <MediaContextProvider>
            <Media greaterThan="md">
              <label htmlFor="shop-slide-right" id="shop-slide-label-right" onClick={scrollRight}>
              <IconCircleChevRight
                id="shop-slide-right"
                className="slide-chevron"
                // style={{ fontSize: '5rem', color: 'grey' }}
              />
              </label>
            </Media>
          </MediaContextProvider>
      </div>
    </>
  );
};

export default ImageSlider;
