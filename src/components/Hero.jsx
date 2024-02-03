import "./Hero.css";

const Hero = () => {
  return (
    <>
        <div className="hero">
          <picture>
            <source
              srcSet="https://koffee.us-east-1.linodeobjects.com/HeroMobile.webp"
              media="(max-height: 915px)"/>
            <source
              srcSet="https://koffee.us-east-1.linodeobjects.com/HeroDesktop.webp"
              media="(max-height: 1080px)" />
            <source
              srcSet="https://koffee.us-east-1.linodeobjects.com/Hero4k.webp"
              media="(min-height: 1081px)" />
            <img src="https://koffee.us-east-1.linodeobjects.com/Hero4k.webp" />
          </picture>
          <div className="call-to-act">
            <h3>Taste our fresh new blends!</h3>
            <button>SHOP NOW</button>{" "}
          </div>
        </div>
    </>
  );
};

export default Hero;
