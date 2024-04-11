import styles from './Navbar.module.css'
import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        Foresee
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/about-foresee">About Foresee</NavLink>
        </li>
        <li>
          <NavLink to="/join-foresee">Join Foresee</NavLink>
        </li>
        <li>
          <NavLink to="/events">Events</NavLink>
        </li>
        <li>
          <NavLink to="/educational-games">Games</NavLink>
        </li>
      </ul>
    </nav>
  );
};