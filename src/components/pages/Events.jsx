import "./Events.css";
import PastEvents from "./PastEvents";
import CollabOpportunities from "../CollabOpportunities";
import UpcomingEvents from "./UpcomingEvents";

export const Events = () => {
  return (
    <div>
      <div className="upcoming-events-container">
        {/* <p className="subsection-heading">Upcoming Events</p> */}
        <UpcomingEvents />
        <p>There are no upcoming events at the moment. Please wait</p>
      </div>
      <div className="past-events-section">
        <p className="subsection-heading">Past Events</p>
        <PastEvents />
      </div>
      <CollabOpportunities />
    </div>
  );
};
