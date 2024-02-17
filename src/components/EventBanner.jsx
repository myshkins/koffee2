import EventPicDesktop from "../assets/EventPicDesktop.webp";
import EventPicMobile from "../assets/EventPicMobile.webp";
import EventPic4k from "../assets/EventPic4k.webp";

import "./EventBanner.css";

const EventBanner = () => {
  return (
    <div className="event-banner">
        <img
          srcSet={`
            ${EventPic4k} 5472w,
            ${EventPicDesktop} 2560w,
            ${EventPicMobile} 980w`}
          alt="an photo looking straight down at a cup of coffee on a plain, empty surface"
          loading="lazy"
        />
      <div className="event-call-to-act">
        <h3>Come to our coffee party!</h3>
        <button>SEE DETAILS</button>
      </div>
    </div>
  );
};

export default EventBanner;
