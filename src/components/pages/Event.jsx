import "./Event.css";

function Banner() {
  return (
    <div className="banner event-banner">
      <h1 className="banner-title">Event Registration</h1>
    </div>
  );
}

function SuccessMessage() {
  return (
    <div className="success-message">
      <span className="success-icon">✓</span>
      You have successfully registered for this event
    </div>
  );
}

function EventDetails() {
  return <div className="event-photo">Event Photo</div>;
}

function InfoTable() {
  return (
    <table className="event-info-table">
      <tbody>
        <tr>
          <td>VENUE</td>
          <td>Location specifics</td>
        </tr>
        <tr>
          <td>DATE</td>
          <td>Date specifics</td>
        </tr>
        <tr>
          <td>PURPOSE</td>
          <td>Description</td>
        </tr>
        <tr>
          <td>TARGET AUDIENCE</td>
          <td>Description</td>
        </tr>
        <tr>
          <td>Cost</td>
          <td>Free of charge</td>
        </tr>
        <tr>
          <td>REGISTRATION LINK</td>
          <td>Link</td>
        </tr>
        <tr>
          <td>CONTACT PERSON</td>
          <td>Description</td>
        </tr>
      </tbody>
    </table>
  );
}

export default function Event() {
  return (
    <>
      <Banner />
      <div className="event-main-content">
        <h2 className="event-title">Event Name XXXXX</h2>
        <hr></hr>
        <div className="container">
          <EventDetails />
          <SuccessMessage />
          <InfoTable />
        </div>
      </div>
    </>
  );
}
