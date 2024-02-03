import EventPic from "../assets/EventPic.webp";
import "./EventBanner.css";

const EventBanner = () => {
  return (
    <div
      className="event-banner"
      style={{ backgroundImage: `url(${EventPic})` }}
    >
      <div className="event-call-to-act">
        <h3>Come to our coffee party!</h3>
        <button>SEE DETAILS</button>
      </div>
    </div>
  );
};

export default EventBanner;
