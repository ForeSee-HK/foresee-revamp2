import "./About.css";

const FoundingStoryTimelineBox = (props) => {
  return (
    <div className="founding-story-timeline-box">
      <p className="founding-story-timeline-time">{props.time}</p>
      <p className="founding-story-timeline-desc">{props.desc}</p>
    </div>
  );
};

export default FoundingStoryTimelineBox;
