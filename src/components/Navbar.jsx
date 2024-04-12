import styles from './Navbar.module.css'
import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { to: "/about-foresee", label: "About Foresee" },
    { to: "/join-foresee", label: "Join Foresee" },
    { to: "/events", label: "Events" },
    { to: "/educational-games", label: "Games" }
  ];

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.title}>
        Foresee
      </Link>
      <div className={menuOpen ? `${styles.hamburger} ${styles.active}` : styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
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
      </ul>
    </nav>
  );
};