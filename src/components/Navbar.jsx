import styles from "./Navbar.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import MenuItems from "./Navbar/MenuItems";
import SocialLinks from "./Navbar/SocialLinks";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.titleDiv}>
        <img src={logo} />
        <Link to="/" className={styles.title}>
          Foresee
        </Link>
      </div>
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
        <MenuItems menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <SocialLinks menuOpen={menuOpen} />
      </ul>
    </nav>
  );
};
