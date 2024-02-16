import EventPicDesktop from "../assets/EventPicDesktop.webp";
// import EventPicMobile from "../assets/EventPicMobile.webp";
// import EventPic4k from "../assets/EventPic4k.webp";

import "./EventBanner.css";

const EventBanner = () => {
  return (
    <div className="event-banner">
            <picture>
              {/* <source */}
              {/*   srcSet="https://koffee.us-east-1.linodeobjects.com/Hero4k.webp" */}
              {/*   media="(min-width: 2000px)" */}
              {/* /> */}
              {/* <source */}
              {/*   srcSet="https://koffee.us-east-1.linodeobjects.com/HeroDesktop.webp" */}
              {/*   media="(min-width: 917px)" */}
              {/* /> */}
              {/* <source */}
              {/*   srcSet="https://koffee.us-east-1.linodeobjects.com/HeroMobile.webp" */}
              {/*   media="(min-width: 0px)" */}
              {/* /> */}
            <img
              src={EventPicDesktop}
              alt="an photo looking straight down at a cup of coffee on a plain, empty surface"
            />
            </picture>
      <div className="event-call-to-act">
        <h3>Come to our coffee party!</h3>
        <button>SEE DETAILS</button>
      </div>
    </div>
  );
};

export default EventBanner;
