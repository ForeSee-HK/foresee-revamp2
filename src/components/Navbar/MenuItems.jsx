import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../Navbar.module.css";

const items = [
  { to: "/", label: "About Foresee" },
  { to: "/join-foresee", label: "Join Foresee" },
  { to: "/events", label: "Events" },
  { to: "/educational-games", label: "Games" },
];

export const MenuItems = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      {items.map((item, index) => (
        <li key={index} onClick={() => setMenuOpen(!menuOpen)}>
          <NavLink
            className={({ isActive }) => (isActive ? styles.linkActive : "")}
            to={item.to}
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </>
  );
};

MenuItems.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};

export default MenuItems;
