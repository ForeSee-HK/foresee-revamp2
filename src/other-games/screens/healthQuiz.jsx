import JunkFood from "../assets/fs-junkfood-hquiz.png";
import HealthyFood from "../assets/fs-vegetables-hquiz.png";
import TvAfar from "../assets/fs-tvafar-hquiz.png";
import TvNear from "../assets/fs-tvnear-hquiz.png";
import ReadBookDark from "../assets/fs-darkroom-hquiz.png";
import RubEyes from "../assets/fs-eyerubbing-hquiz.png";
import Jogging from "../assets/fs-jogging-hquiz.jpg";
import PlayVidGame from "../assets/fs-playvideogame-hquiz.png";
import Salmon from "../assets/fs-salmon-hquiz.png";
import WashHand from "../assets/fs-washhand-hquiz.png";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HealthQuizReasoning from "../components/healthQuizReasoning";
import HealthQuizQuestion from "../components/healthQuizQuestion";
import HealthQuizSummaryTable from "../components/healthQuizSummaryTable";
import HealthQuizProgressBar from "../components/healthQuizProgessBar";
import { Fade } from "@mui/material";
import "./healthQuiz.css";

export const content = [
  {
    imgSrc: TvAfar,
    habit: "Watching TV from afar",
    isHealthy: true,
    desc: "Watch TV from afar reduces eye strain, prevent eye conditions",
  },
  {
    imgSrc: JunkFood,
    habit: "Eating hamburgers",
    isHealthy: false,
    desc: "Contains a lot of fat, can cause heart disease if overeaten",
  },
  {
    imgSrc: ReadBookDark,
    habit: "Reading in darkness",
    isHealthy: false,
    desc: "Reading in low light strains eyes, can cause eye diseases",
  },
  {
    imgSrc: Jogging,
    habit: "Jogging",
    isHealthy: true,
    desc: "Promotes overall cardiovascular health, improve blood flow to eyes",
  },
  {
    imgSrc: WashHand,
    habit: "Handwashing",
    isHealthy: true,
    desc: "Prevents spread of germs and diseases, reduce risk of contracting diseases",
  },
  {
    imgSrc: RubEyes,
    habit: "Rubbing eyes",
    isHealthy: false,
    desc: "May introduce germs and bacteria to the eyes, increases eye pressure",
  },
  {
    imgSrc: Salmon,
    habit: "Consuming salmon",
    isHealthy: true,
    desc: "Salmon is rich in omega-3 fatty acids, supports retina, reduce inflammation, improve eye health",
  },
  {
    imgSrc: PlayVidGame,
    habit: "Playing video games",
    isHealthy: false,
    desc: "Causes eye strain and pressure, cause addiction as well",
  },
  {
    imgSrc: HealthyFood,
    habit: "Eating fruits and vegetables",
    isHealthy: true,
    desc: "Contains nutrients that keep us healthy, and vitamins improving eye health",
  },
  {
    imgSrc: TvNear,
    habit: "Watching TV too close",
    isHealthy: false,
    desc: "Causes eye strain and pressure, try to watch from a farther distance",
  },
];

const HealthQuiz = () => {
  const navigate = useNavigate();

  const getShuffledContent = () => {
    const shuffledContent = content.sort((a, b) => 0.5 - Math.random());
    return shuffledContent.map((item) => ({
      ...item,
      isCorrect: null,
    }));
  };

  const [score, setScore] = useState(0);
  const [isShowingQuestion, setIsShowingQuestion] = useState(true);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [prevCorrect, setPrevCorrect] = useState(false);
  const [showImgFadeAnimation, setShowImgFadeAnimation] = useState(false);
  const [shuffledContent, setShuffledContent] = useState(null);
  const [gameEnded, setGameEnded] = useState(false);

  useEffect(() => {
    setShowImgFadeAnimation(false);
    setShowImgFadeAnimation(true);
  }, [currentContentIndex]);

  useEffect(() => {
    setShuffledContent(getShuffledContent());
  }, []);

  if (!shuffledContent) return <div></div>;
  if (gameEnded)
    return (
      <div style={{ height: "100%", position: "relative", marginTop: "30px" }}>
        <HealthQuizSummaryTable shuffledContent={shuffledContent} />
        <HealthQuizProgressBar
          length={10}
          currentIndex={currentContentIndex + 1}
        />
      </div>
    );
  return (
    <div style={{ height: "100%", position: "relative", marginTop: "30px" }}>
      <div className="health-quiz-score-container">
        <p className="health-quiz-score-label">Current score:</p>
        <p className="health-quiz-score">{score}</p>
      </div>

      <div className="health-quiz">
        <div className="img-game-prompt-splitter">
          <Fade in={showImgFadeAnimation} timeout={1000}>
            <img
              src={shuffledContent[currentContentIndex].imgSrc}
              className="game-img img-height-property"
            />
          </Fade>

          {isShowingQuestion ? (
            <HealthQuizQuestion
              isHealthy={shuffledContent[currentContentIndex].isHealthy}
              setScore={setScore}
              setIsShowingQuestion={setIsShowingQuestion}
              setPrevCorrect={setPrevCorrect}
              setShuffledContent={setShuffledContent}
              currentContentIndex={currentContentIndex}
            />
          ) : (
            <HealthQuizReasoning
              desc={shuffledContent[currentContentIndex].desc}
              currentContentIndex={currentContentIndex}
              setIsShowingQuestion={setIsShowingQuestion}
              setCurrentContentIndex={setCurrentContentIndex}
              setGameEnded={setGameEnded}
              contentLength={shuffledContent.length}
              prevCorrect={prevCorrect}
            />
          )}
        </div>
      </div>
      <HealthQuizProgressBar length={10} currentIndex={currentContentIndex} />
    </div>
  );
};

export default HealthQuiz;
