import "./Events.css";
import PastEventComponent from "./PastEventComponent";
import iCareImg from "../../assets/events-page/i-care.png";
import EyeHealthCovidImg from "../../assets/events-page/eye-health-covid.png";
import InnovatingEyecareImg from "../../assets/events-page/innovating-eyecare.png";
import BlindfoldDrawingImg from "../../assets/events-page/blindfold-drawing.png";
import OrbisSAimg from "../../assets/events-page/orbis-sa.png";
import FamilyKidEventImg from "../../assets/events-page/family-kid-event.png";
import WorldSightDayImg from "../../assets/events-page/world-sight-day.png";
import LeeTungFundraiseImg from "../../assets/events-page/lee-tung-fundraise.png";

const PastEventsObj = [
  {
    eventImg: iCareImg,
    eventTitle: "I CARE EYE CARE",
    eventSubtitle: "Eye Health Seminar for HKUST students",
    eventDesc:
      "To raise awareness of eye care, we invited Professor Leung and Professor Lam from the University of Hong Kong to give a 2-session lecture on World Sight Day. Professor Leung introduced habits that would damage eyesight, and Professor Lam gave participants a better understanding of myopia. ",
    eventDate: "14 October 2021",
    eventVenue: "Venue: Zoom",
  },
  {
    eventImg: EyeHealthCovidImg,
    eventTitle: "Eye Health under COVID-19 ",
    eventSubtitle: "Cross-channel 10-day Social Media Campaign",
    eventDesc:
      "The outbreak of the pandemic has significantly increased the amount of time we spend using electronics. A cross-channel social media campaign was launched from 1 June 2022 through 10 June 2022 to raise public awareness of eye care. Throughout the 10 consecutive days, we shared relevant information on eye care and expert advice across our Instagram, Facebook, and YouTube channels. Participants have learnt about the growing trend of myopia during the epidemic, watched the sharing of ophthalmology professors, and tested their eye care knowledge through our quizzes. Over 1000 views and 200 likes have been received for our posts, and our participants find the event helpful in raising eye care awareness during COVID-19.",
    eventDate: "1-10 June 2022",
    eventVenue: "Venue: All ForeSee Social Media accounts",
  },
  {
    eventImg: InnovatingEyecareImg,
    eventTitle: "Innovating the Eye-care Ecosystem Panel Talk ",
    eventSubtitle: "Eye Health Panel Talk for HKUST Community ",
    eventDesc:
      "The seminar provided HKUST students with an overview of the eye-care industry in Hong Kong today and ways in which they can assist in improving access to eye-care services. Three distinguished guests, Professor Ying CHAU from HKUST, Mr. Tommy SHUM from Bowtie, and Dr. Emily CHOY, the Group Senior Business Director at OPTICAL 88 Group, were invited to share their knowledge and present insightful discussions regarding “Integrating academics and eye care industry” and “Building an ecosystem” to innovate access to eye care services. More than 50 students signed up for the panel talk and have gained valuable insights into the eye care industry.",
    eventDate: "9 September 2022",
    eventVenue: "Venue: HKUST Campus",
  },
  {
    eventImg: BlindfoldDrawingImg,
    eventTitle: "Blindfold Drawing Competition",
    eventSubtitle: "Family and Children-oriented Event",
    eventDesc:
      'ForeSee 2022 Blindfold Drawing Competition - "When it Gets Dark" was held on 13 August 2022 with great success. In collaboration with their children, 22 children and 27 parents created a themed painting with blindfolds on that day. People who have normal vision typically find drawing easy, but this may not be true for those who have lost their vision. In order to foster awareness of the importance of protecting children\'s vision, we aim to let parents and children experience the difficulties and insecurities of drawing in darkness. An eye care talk delivered by Orbis concluded the event, educating parents and children about eye care tips.',
    eventDate: "August 2022",
    eventVenue: "Venue: HKUST Campus",
  },
  {
    eventImg: OrbisSAimg,
    eventTitle: "Orbis Student Ambassador Event",
    eventSubtitle: "Partner-initiated Event for High School Students",
    eventDesc:
      'We volunteered in Orbis\' Student Ambassador Campaign Ceremony and Blindfold Experience Day on 20 August 2022, with around 150 eye care ambassadors selected from 20 secondary schools in Hong Kong taking part. The event provided an opportunity for us to interview secondary school students about their habits and tips on eye protection. We also coordinated blindfold game booths like "Walking Stick" to let students experience the feeling of vision loss.',
    eventDate: "August 2022",
    eventVenue: "Venue: Wan Chai",
  },
  {
    eventImg: FamilyKidEventImg,
    eventTitle: "「護眼童行」兒童眼部保健講座 ",
    eventSubtitle: "Family and Children-oriented Event",
    eventDesc:
      'On 31 May 2023, our team held an eyecare workshop for parents and children gathered by Social Ventures Hong Kong where parents were invited to share their opinions about protecting the eye health of their children. Additionally, we are very pleased to have an optometrist, also CEO of i-SEE Vision Care Limited ("i-SEE"), Mr Humphrey Cheung, join us as a guest speaker to share about myopia and conduct free eye exams for the children.',
    eventDate: "May 2023",
    eventVenue: "Venue: Sham Shui Po",
  },
  {
    eventImg: WorldSightDayImg,
    eventTitle: "World Sight Day Promotion Booth",
    eventSubtitle: "Experiential Events for HKUST Community",
    eventDesc:
      'In line with the theme of 2023 World Sight Day, "Love your eyes at work," this engaging event incorporates game-based learning to provide participants with a first-hand experience of vision impairment or loss. By immersing individuals in simulated scenarios, we aim to create awareness about the significance of maintaining healthy vision and promote the preventive measures and tools available to protect our eyes. Through this interactive experience, we hope to inspire the HKUST community to prioritize eye health as they work and extend their advocacy for eye protection to their friends and family, ultimately fostering a culture of caring for our eyes and promoting our entire community\'s well-being.',
    eventDate: "19-20 October 2023",
    eventVenue: "Venue: HKUST Campus",
  },
  {
    eventImg: LeeTungFundraiseImg,
    eventTitle: "Lee Tung Avenue Fundraising Booth with Orbis",
    eventSubtitle: "Partner-initiated Fundraising Event",
    eventDesc:
      "In support of World Sight Day, we collaborated with Orbis on a fundraising event on 20-22 October 2023. In addition to handing out eye health brochures to families and children who passed by, ForeSee members hosted experiential booths at which participants were guided through braille writing and blindfold drawing exercises. Prizes and badges have also been awarded to participants who completed the activities.",
    eventDate: "20-22 October 2023",
    eventVenue: "Venue: Lee Tung Avenue",
  },
];

const PastEvents = () => {
  return (
    <>
      {PastEventsObj.map((pastEvent, index) => {
        return (
          <PastEventComponent
            key={index}
            eventImg={pastEvent.eventImg}
            eventTitle={pastEvent.eventTitle}
            eventSubtitle={pastEvent.eventSubtitle}
            eventDesc={pastEvent.eventDesc}
            eventDate={pastEvent.eventDate}
            eventVenue={pastEvent.eventVenue}
          />
        );
      })}
    </>
  );
};

export default PastEvents;
