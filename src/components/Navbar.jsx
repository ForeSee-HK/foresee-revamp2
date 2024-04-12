import styles from './Navbar.module.css'
import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.title}>
        Foresee
      </Link>
      <div className={styles.menu} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? styles.open : ""}>
        <li onClick={() => setMenuOpen(!menuOpen)}><NavLink className={({ isActive }) => {
          return isActive ? styles.active : "";
        }} to="/about-foresee">About Foresee</NavLink></li>
        <li onClick={() => setMenuOpen(!menuOpen)}><NavLink className={({ isActive }) => {
          return isActive ? styles.active : "";
        }} to="/join-foresee">Join Foresee</NavLink></li>
        <li onClick={() => setMenuOpen(!menuOpen)}><NavLink className={({ isActive }) => {
          return isActive ? styles.active : "";
        }} to="/events">Events</NavLink></li>
        <li onClick={() => setMenuOpen(!menuOpen)}><NavLink className={({ isActive }) => {
          return isActive ? styles.active : "";
        }} to="/educational-games">Games</NavLink></li>
      </ul>
    </nav>
  );
};