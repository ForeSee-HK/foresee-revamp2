import { useState, useEffect } from "react";
import GameButton from "./gameButton";
import "../screens/healthQuiz.css";
import { Fade } from "@mui/material";

const HealthQuizQuestion = ({
  setScore,
  setIsShowingQuestion,
  setPrevCorrect,
  setShuffledContent,
  isHealthy,
  currentContentIndex,
}) => {
  const [showQuestion, setShowQuestion] = useState(false);

  useEffect(() => {
    setShowQuestion(true);
  }, []);

  return (
    <div>
      <Fade in={showQuestion} timeout={1000}>
        <p className="health-quiz-question">
          Does the displayed image indicate a healthy or unhealthy habit?
        </p>
      </Fade>
      {/* <img src={props.imgSrc} /> */}
      <div className="game-button-flex-container">
        <GameButton
          onClick={() => {
            if (isHealthy) {
              setScore((score) => score + 1);
              setPrevCorrect(true);
              setShuffledContent((shuffledContent) =>
                shuffledContent.map((item, index) => {
                  if (index == currentContentIndex) {
                    return { ...item, isCorrect: true };
                  } else {
                    return item;
                  }
                })
              );
            } else {
              setPrevCorrect(false);
              setShuffledContent((shuffledContent) =>
                shuffledContent.map((item, index) => {
                  if (index == currentContentIndex) {
                    return { ...item, isCorrect: false };
                  } else {
                    return item;
                  }
                })
              );
            }
            setIsShowingQuestion(false);
          }}
          style={{ backgroundColor: "#5dbea3" }}
        >
          HEALTHY
        </GameButton>
        <GameButton
          onClick={() => {
            if (!isHealthy) {
              setScore((score) => score + 1);
              setPrevCorrect(true);
              setShuffledContent((shuffledContent) =>
                shuffledContent.map((item, index) => {
                  if (index == currentContentIndex) {
                    return { ...item, isCorrect: true };
                  } else {
                    return item;
                  }
                })
              );
            } else {
              setPrevCorrect(false);
              setShuffledContent((shuffledContent) =>
                shuffledContent.map((item, index) => {
                  if (index == currentContentIndex) {
                    return { ...item, isCorrect: false };
                  } else {
                    return item;
                  }
                })
              );
            }
            setIsShowingQuestion(false);
          }}
          style={{ backgroundColor: "#dd7973" }}
        >
          UNHEALTHY
        </GameButton>
      </div>
    </div>
  );
};

export default HealthQuizQuestion;
