import { useEffect, useState } from "react";
import { Fade } from "@mui/material";

const GameButton = ({ style, ...props }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setShowButton(true);
  }, []);

  return (
    <Fade in={showButton} timeout={props.timeout ? props.timeout : 1000}>
      <button style={style} onClick={props.onClick} className="game-button">
        {props.children}
      </button>
    </Fade>
  );
};

export default GameButton;
