import "./menuButton.css";
import { useNavigate } from "react-router-dom";

const MenuButton = (props) => {
  const navigate = useNavigate();
  return (
    <div className="menuButton" onClick={() => navigate(props.path)}>
      <p className="main-menu-button-title">{props.text}</p>
      <p className="main-menu-button-desc">{props.desc}</p>
    </div>
  );
};

export default MenuButton;
