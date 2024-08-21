import "../screens/textClassification.css";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Fade } from "@mui/material";

const gameButtonOptions = ["BACK TO MAIN", "RESTART", "START", "SEEN", "NEW"];

const TextClassificationButton = ({
  gameButtonIndex,
  restartFunc,
  startFunc,
  clickSeenButton,
  clickNewButton,
}) => {
  const [fadeInGameButton, setFadeInGameButton] = useState(false);
  const [fadedYet, setFadedYet] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!fadedYet) {
      setFadeInGameButton(true);
      setFadedYet(true);
    }
  }, [fadedYet]);

  return (
    <Fade in={fadeInGameButton} timeout={1000}>
      <button
        onClick={() => {
          //if button option = "BACK TO MAIN"
          if (gameButtonIndex == 0) navigate("/");
          //if button option = "RESTART"
          else if (gameButtonIndex == 1) restartFunc();
          //if button option = "START"
          else if (gameButtonIndex == 2) {
            //TODO: add start timer
            startFunc();
            // handleStartTimer();
            // getNewWordInstance();
          }
          //if button option = "SEEN"
          else if (gameButtonIndex == 3) {
            // console.log(storedWordsSet);
            // if (storedWordsSet.has(currentWordObj.index)) setScore(score + 1);
            // addWordToSet(currentWordObj.index);
            // getNewWordInstance();
            clickSeenButton();
          }
          //if button option = "NEW"
          else if (gameButtonIndex == 4) {
            // if (storedWordsSet.has(currentWordObj.index) == false)
            //   setScore(score + 1);
            // addWordToSet(currentWordObj.index);
            // getNewWordInstance();
            clickNewButton();
          }
        }}
        className="game-button"
      >
        {gameButtonOptions[gameButtonIndex]}
      </button>
    </Fade>
  );
};

export default TextClassificationButton;
