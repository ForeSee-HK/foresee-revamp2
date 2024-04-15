import "./About.css";
import FoundingStoryTimelineBox from "./about-page-components/FoundingStoryTimelineBox";
import ThingsWeDid from "./about-page-components/ThingsWeDid";
import CoreMemberTeamStructure from "./about-page-components/core-members.png";
import CollabOpportunities from "../CollabOpportunities";

export const About = () => {
  return (
    <div>
      <div className="mission-ctr">
        <div className="mission-left">
          <p className="mission-heading">Our mission</p>
          <p className="mission-desc">
            We hope to empower local communities with the resources necessary to
            convey knowledge on eye care and prevent eye health degradation at
            an early stage.
          </p>
        </div>
        <div className="mission-right">
          <p className="mission-slogan">Look into the bright future</p>
        </div>
      </div>
      <div className="what-we-do">
        <p className="what-we-do-heading">What we do</p>
        <p className="what-we-do-desc">
          We are dedicated to raising public awareness of vision care,
          especially for children and their parents through actively initiating
          eye-health projects and campaigns.
        </p>
        <ThingsWeDid />
      </div>
      <div className="founding-story">
        <p className="founding-story-heading">Founding Story</p>
        <div className="founding-story-left-right-ctr">
          <div className="founding-story-left">
            <p className="founding-story-time">4 years since establishment</p>
            <p className="founding-story-main-desc">
              From a hand-drawn app prototype to a stably-running organization,
              ForeSee has come a long way with the support from SIGHT and its
              partners.
            </p>
          </div>
          <div className="founding-story-right">
            <FoundingStoryTimelineBox
              time="Feb 2020"
              desc="Launched ForeSee Android 1.0, with myopia data trend, and Q&A forum"
            />
            <FoundingStoryTimelineBox
              time="Oct 2021"
              desc="Held online health seminars with guest speakers from HKU Ophthalmology"
            />
            <FoundingStoryTimelineBox
              time="Oct 2021"
              desc="Admitted to HKUST Dream Builder Incubation Programme 2021"
            />
            <FoundingStoryTimelineBox
              time="Jun 2022"
              desc="Social media campaign in collaboration with professors from CUHK, HKU and PolyU"
            />
            <FoundingStoryTimelineBox
              time="Aug 2022"
              desc="Actively organised offline events targeting the general public"
            />
            <FoundingStoryTimelineBox
              time="Mar 2023"
              desc="Launched ForeSee Android 2.0, adding Snellen Chart and colour blindness testing functions"
            />
          </div>
        </div>
      </div>
      <div>
        <p className="core-members-heading">Core Members</p>
        <img
          src={CoreMemberTeamStructure}
          className="core-member-team-structure"
        />
      </div>
      <CollabOpportunities />
    </div>
  );
};
