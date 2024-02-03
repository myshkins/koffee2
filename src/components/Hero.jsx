import FourKPic from "../assets/Hero4k.webp";
import DesktopPic from "../assets/HeroDesktop.webp";
import MobilePic from "../assets/HeroMobile.webp";

import "./Hero.css";

const Hero = () => {
  return (
    <>
      {/* <MediaQuery maxHeight={915}> */}
      {/* <MediaQuery minHeight={916} and maxHeight={1080}> */}
      {/* <MediaQuery minHeight={1081}> */}
        <div className="hero">
          <picture>
            <source srcset="https://koffee.us-east-1.linodeobjects.com/HeroDesktop.webp">
            <img src="https://koffee.us-east-1.linodeobjects.com/Hero4k.webp"
          <div className="call-to-act">
            <h3>Taste our fresh new blends!</h3>
            <button>SHOP NOW</button>{" "}
          </div>
        </div>
      {/* </MediaQuery> */}
    </>
  );
};

export default Hero;
