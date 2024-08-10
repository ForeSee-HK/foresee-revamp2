import { useNavigate } from "react-router-dom";
import GameButton from "./gameButton";
import { Fade } from "@mui/material";
import { useEffect, useState } from "react";
import "../screens/healthQuiz.css";

const HealthQuizReasoning = ({
  desc,
  setIsShowingQuestion,
  setCurrentContentIndex,
  currentContentIndex,
  contentLength,
  prevCorrect,
  setGameEnded,
}) => {
  const navigate = useNavigate();
  const [showText, setShowText] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setShowText(true);
    setShowButton(true);
  }, []);

  return (
    <div>
      {prevCorrect ? (
        <Fade in={showText} timeout={1000}>
          <p className="correct-text text-button">Correct!</p>
        </Fade>
      ) : (
        <Fade in={showText} timeout={1000}>
          <p className="wrong-text text-button">Wrong!</p>
        </Fade>
      )}
      <Fade in={showText} timeout={1000}>
        <p className="health-quiz-desc">{desc}</p>
      </Fade>
      {currentContentIndex < contentLength - 1 ? (
        <GameButton
          onClick={() => {
            setIsShowingQuestion(true);
            setCurrentContentIndex((current) => current + 1);
          }}
        >
          NEXT
        </GameButton>
      ) : (
        <GameButton
          onClick={() => {
            setGameEnded((gameEnded) => true);
          }}
        >
          The game has finished!
        </GameButton>
      )}
    </div>
  );
};

export default HealthQuizReasoning;
