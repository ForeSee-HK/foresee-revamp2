import "./Events.css";

const PastEventComponent = (props) => {
  return (
    <div className="past-event-ctr">
      <img src={props.eventImg} className="event-img" />
      <div className="event-details">
        <p className="event-title">{props.eventTitle}</p>
        <p className="event-subtitle">{props.eventSubtitle}</p>
        <p className="event-desc">{props.eventDesc}</p>
        <div className="flex-ctr-flex-start">
          <p className="event-date">{props.eventDate}</p>
          <p className="event-venue">{props.eventVenue}</p>
        </div>
      </div>
    </div>
  );
};

export default PastEventComponent;
