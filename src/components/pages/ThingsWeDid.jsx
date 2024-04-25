import "./About.css";
import ExperientialEvents from "../../assets/about-page/experiential-events.png";
import TalkAndSeminar from "../../assets/about-page/talk-n-seminar.png";
import EducationalGames from "../../assets/about-page/educational-games.png";
import TechnologicalTools from "../../assets/about-page/technological-tools.png";
import SocialMediaEngagement from "../../assets/about-page/social-media-engagement.png";
import FundraisingCollabs from "../../assets/about-page/fundraising-collab.png";

const ImageTitleButton = (props) => {
  return (
    <div className="image-title-div">
      <img src={props.imgSrc} className="image-title-img" />
      <p className="image-title-ttl">{props.title}</p>
    </div>
  );
};

const ThingsWeDid = () => {
  return (
    <div className="things-we-did">
      <ImageTitleButton
        imgSrc={ExperientialEvents}
        title="Experiential Events"
      />
      <ImageTitleButton imgSrc={TalkAndSeminar} title="Talk and seminar" />
      <ImageTitleButton imgSrc={EducationalGames} title="Educational Games" />
      <ImageTitleButton
        imgSrc={TechnologicalTools}
        title="Technological Tools"
      />
      <ImageTitleButton
        imgSrc={SocialMediaEngagement}
        title="Social Media Engagement"
      />
      <ImageTitleButton
        imgSrc={FundraisingCollabs}
        title="Fundraising collaborations"
      />
    </div>
  );
};

export default ThingsWeDid;
