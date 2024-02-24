import "./EventBanner.css";

const EventBanner = () => {
  return (
    <div className="event-banner">
        <picture>
          <source

            srcSet="https://koffee.us-east-1.linodeobjects.com/EventPic4k.webp"
            media="(min-width: 2000px)"
          />
          <source
            srcSet="https://koffee.us-east-1.linodeobjects.com/EventPicDesktop.webp"
            media="(min-width: 917px)"
          />
          <source
            srcSet="https://koffee.us-east-1.linodeobjects.com/EventPicMobile.webp"
            media="(min-width: 0px)"
          />
        <img
          src="https://koffee.us-east-1.linodeobjects.com/EventPicMobile.webp"
          alt="a closeup of barista's hands making coffee"
          loading="lazy"
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
