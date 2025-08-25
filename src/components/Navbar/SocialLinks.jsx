import styles from "../Navbar.module.css";
import PropTypes from "prop-types";
import EmailIcon from "../../assets/social_media/EmailUs.svg";
import FacebookIcon from "../../assets/social_media/Facebook.svg";
import InstagramIcon from "../../assets/social_media/Instagram.svg";
import LinkedInIcon from "../../assets/social_media/LinkedIn.svg";
import YoutubeIcon from "../../assets/social_media/Youtube.svg";

const icons = [
  { src: EmailIcon, alt: "Email" },
  { src: FacebookIcon, alt: "Facebook" },
  { src: InstagramIcon, alt: "Instagram" },
  { src: LinkedInIcon, alt: "LinkedIn" },
  { src: YoutubeIcon, alt: "Youtube" },
];

export const SocialLinks = ({ menuOpen }) => {
  return (
    <div className={styles.iconsDiv} data-open={menuOpen}>
      {icons.map((icon, index) => (
        <img height="30px" key={index} src={icon.src} alt={icon.alt} />
      ))}
    </div>
  );
};

SocialLinks.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
};

export default SocialLinks;
