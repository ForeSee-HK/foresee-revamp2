import "./Events.css";
import PastEvents from "./PastEvents";
import CollabOpportunities from "../CollabOpportunities";
import UpcomingEvents from "./UpcomingEvents";
import { Link } from "react-router-dom";

export const Events = () => {
  return (
    // <div>

    // </div>
    <div>
      
        {/* <p className="subsection-heading">Upcoming Events</p> */}
        <UpcomingEvents/>
        <p className="">There are no upcoming events at the moment. Please wait</p>

      <div className="past-events-section">
        <p className="subsection-heading">Past Events</p>
        <PastEvents />
      </div>
      <CollabOpportunities />
    </div>
  );
};
