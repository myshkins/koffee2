import "./EventBanner.css";

const EventBanner = () => {
  return (
    <div className="event-banner">
        <img
          srcSet={`
            https://koffee.us-east-1.linodeobjects.com/EventPic4k.webp 5472w,
            https://koffee.us-east-1.linodeobjects.com/EventPicDesktop.webp 2560w,
            https://koffee.us-east-1.linodeobjects.com/EventPicMobile.webp 980w`}
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
