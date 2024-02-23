import { useEffect, useRef } from "react";

import "./Hero.css";

const Hero = () => {

  const refPlaceholder = useRef(null)
  const refHeroImg = useRef(null)
  

  useEffect(() => {
    const placeholder = refPlaceholder.current
    const heroImg = refHeroImg.current

    const hidePlaceholder = () => {
      placeholder.style.display = "none"
    }

    if (heroImg.complete) {
      hidePlaceholder()
    } else {
      heroImg.addEventListener("load", hidePlaceholder);
    }

    return () => {
      heroImg.removeEventListener("load", hidePlaceholder);
    }
  }, []);

  return (
    <>
        <div className="hero">
          <div className="hero-img-container">
            <div className="hero-img-wrap">
              <div ref={refPlaceholder} id="hero-placeholder"></div>
              <picture>
                <source
                  srcSet="https://koffee.us-east-1.linodeobjects.com/Hero4k.webp"
                  media="(min-width: 2000px)"
                />
                <source
                  srcSet="https://koffee.us-east-1.linodeobjects.com/HeroDesktop.webp"
                  media="(min-width: 917px)"
                />
                <source
                  srcSet="https://koffee.us-east-1.linodeobjects.com/HeroMobile.webp"
                  media="(min-width: 0px)"
                />
              <img
                ref={refHeroImg}
                src="https://koffee.us-east-1.linodeobjects.com/HeroDesktop.webp"
                alt="an photo looking straight down at a cup of coffee on a plain, empty surface"
              />
              </picture>
            </div>
          </div>
          <div className="call-to-act">
            <h3>Taste the rainbow.</h3>
            <button>SHOP NOW</button>{" "}
          </div>
        </div>
    </>
  );
};

export default Hero;
