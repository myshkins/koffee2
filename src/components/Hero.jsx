import "./Hero.css";

const Hero = () => {
  return (
    <>
        <div className="hero">
          <div className="hero-img-container">
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
              src="https://koffee.us-east-1.linodeobjects.com/HeroDesktop.webp"
              alt="an photo looking straight down at a cup of coffee on a plain, empty surface"
            />
            </picture>
          </div>
          <div className="call-to-act">
            <h3>Taste our fresh new blends!</h3>
            <button>SHOP NOW</button>{" "}
          </div>
        </div>
    </>
  );
};

export default Hero;
