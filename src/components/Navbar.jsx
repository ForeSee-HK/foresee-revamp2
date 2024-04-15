import styles from "./Navbar.module.css";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

// import ICONS from "../assets/social_media";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    // { to: "/about-foresee", label: "About Foresee" },
    { to: "/", label: "About Foresee" },
    { to: "/join-foresee", label: "Join Foresee" },
    { to: "/events", label: "Events" },
    { to: "/educational-games", label: "Games" },
  ];

  const icons = [
    "src/assets/social_media/EmailUs.svg",
    "src/assets/social_media/Facebook.svg",
    "src/assets/social_media/Instagram.svg",
    "src/assets/social_media/LinkedIn.svg",
    "src/assets/social_media/Youtube.svg",
  ];

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.title}>
        Foresee
      </Link>
      <div
        className={
          menuOpen ? `${styles.hamburger} ${styles.active}` : styles.hamburger
        }
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
      <ul className={menuOpen ? styles.open : ""}>
        {menuItems.map((item, index) => (
          <li key={index} onClick={() => setMenuOpen(!menuOpen)}>
            <NavLink
              className={({ isActive }) => (isActive ? styles.linkActive : "")}
              to={item.to}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
        <div className={styles.iconsDiv}>
          {icons.map((src, index) => (
            <img height={"30px"} key={index} src={src} alt={`Image ${index}`} />
          ))}
        </div>
      </ul>
    </nav>
  );
};
