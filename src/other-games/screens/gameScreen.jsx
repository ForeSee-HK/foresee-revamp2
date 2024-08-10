import "./gameScreen.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Fade } from "@mui/material";

//props: gameTitle, children
const GameScreen = (props) => {
  const navigate = useNavigate();

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className="page-container">
      <Fade in={fadeIn} timeout={1000}>
        <div style={{ maxHeight: "200px" }}>
          <p className="game-title">{props.gameTitle}</p>
        </div>
      </Fade>
      <div className="game-primary-container">
        <div className="game-secondary-container">{props.children}</div>
      </div>
      {/* <footer className="explore-other-footer">
        <Fade in={fadeIn} timeout={1000}>
          <p className="explore-other-text" onClick={() => navigate("/")}>
            Explore other games &gt;
          </p>
        </Fade>
      </footer> */}
    </div>
  );
};

export default GameScreen;
