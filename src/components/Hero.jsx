import "./Hero.css";

const Hero = () => {
  return (
    <>
        <div className="hero">
          <img
            srcSet="
              https://koffee.us-east-1.linodeobjects.com/Hero4k.webp 4240w,
              https://koffee.us-east-1.linodeobjects.com/HeroDesktop.webp 1797w,
              https://koffee.us-east-1.linodeobjects.com/HeroMobile.webp 915w"
            sizes="100vw"
          />
          <div className="call-to-act">
            <h3>Taste our fresh new blends!</h3>
            <button>SHOP NOW</button>{" "}
          </div>
        </div>
    </>
  );
};

export default Hero;
