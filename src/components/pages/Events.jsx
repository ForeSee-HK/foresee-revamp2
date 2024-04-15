import "./Events.css";
import PastEvents from "./events-page-components/PastEvents";
import CollabOpportunities from "../CollabOpportunities";

export const Events = () => {
  return (
    // <div>

    // </div>
    <div>
      <div className="upcoming-events-container">
        <p className="subsection-heading">Upcoming Events</p>
        <p className="">There are no upcoming events at the moment.</p>
      </div>
      <div className="past-events-section">
        <p className="subsection-heading">Past Events</p>
        <PastEvents />
      </div>
      <CollabOpportunities />
    </div>
  );
};
