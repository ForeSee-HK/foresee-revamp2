import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./textClassification.css";
import "../components/gameButton.css";
import { Fade } from "@mui/material";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import TextClassificationButton from "../components/TextClassificationButton";

const gameButtonOptions = [
  "BACK TO MAIN",
  "RESTART",
  "START",
  "SEEN",
  "NEW",
  "PLAY AGAIN",
];

const TextClassificationGame = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [storedWordsSet, setStoredWordsSet] = useState(new Set());
  const [currentWordObj, setCurrentWordObj] = useState(null);
  const [fadeInInstructionsText, setFadeInInstructionsText] = useState(false);
  const [timer, setTimer] = useState(20);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [wordsList, setWordsList] = useState([]);
  const [gameEnded, setGameEnded] = useState(false);
  const [prevScore, setPrevScore] = useState(0);

  const wordsCollectionRef = collection(db, "textClassification");

  useEffect(() => {
    setFadeInInstructionsText(true);
    const getWordsList = async () => {
      try {
        const data = await getDocs(wordsCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(filteredData[0].eyeCareSet1);
        setWordsList(filteredData[0].eyeCareSet1);
      } catch (err) {
        console.log(err);
      }
    };

    getWordsList();
  }, []);

  useEffect(() => {
    let countdown;

    if (isTimerActive) {
      countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => {
      clearInterval(countdown);
    };
  }, [isTimerActive]);

  useEffect(() => {
    if (timer === 0) {
      setGameEnded(true);
      setPrevScore(score);
      restart();
    }
  }, [timer]);

  const handleStartTimer = () => {
    setTimer(20);
    setIsTimerActive(true);
  };

  const addWordToSet = (index) => {
    if (!storedWordsSet.has(index)) {
      const newSet = new Set(storedWordsSet);
      newSet.add(index);
      setStoredWordsSet(newSet);
    }
  };

  const getNewWordInstance = () => {
    const randomIndex = Math.floor(Math.random() * wordsList.length);
    setCurrentWordObj({ index: randomIndex, word: wordsList[randomIndex] });
  };

  const restart = () => {
    setScore(0);
    setStoredWordsSet(new Set());
    setCurrentWordObj(null);
  };

  const start = () => {
    setGameEnded(false);
    handleStartTimer();
    getNewWordInstance();
  };

  const clickSeenBtn = () => {
    if (storedWordsSet.has(currentWordObj.index)) setScore(score + 1);
    addWordToSet(currentWordObj.index);
    getNewWordInstance();
  };

  const clickNewBtn = () => {
    if (storedWordsSet.has(currentWordObj.index) == false) setScore(score + 1);
    addWordToSet(currentWordObj.index);
    getNewWordInstance();
  };

  const TextGameButton = (props) => {

    return (
      <button
        onClick={() => {
          //if button option = "BACK TO MAIN"
          if (props.gameButtonIndex == 0) navigate("/");
          //if button option = "RESTART"
          else if (props.gameButtonIndex == 1) restart();
          //if button option = "START"
          else if (props.gameButtonIndex == 2 || props.gameButtonIndex == 5) {
            //TODO: add start timer
            handleStartTimer();
            getNewWordInstance();
          }
          //if button option = "SEEN"
          else if (props.gameButtonIndex == 3) {
            console.log(storedWordsSet);
            if (storedWordsSet.has(currentWordObj.index)) setScore(score + 1);
            addWordToSet(currentWordObj.index);
            getNewWordInstance();
          }
          //if button option = "NEW"
          else if (props.gameButtonIndex == 4) {
            if (storedWordsSet.has(currentWordObj.index) == false)
              setScore(score + 1);
            addWordToSet(currentWordObj.index);
            getNewWordInstance();
          }
        }}
        className="game-button"
        style={{ transitionDelay: "1000ms" }}
      >
        {gameButtonOptions[props.gameButtonIndex]}
      </button>
    );
  };

  return (
    <div>
      <div className="text-classification-game-container">
        {currentWordObj ? (
          <div className="text-classification-game-container">
            <p className="text-classification-title">Current score:</p>
            <p className="text-game-score">{score}</p>
            <p className="text-game-timer">
              Time left: <p style={{ color: "red" }}>{timer}:00</p>
            </p>
            <p className="text-game-prompt">Displayed word:</p>
            <p className="text-game-current-word">{currentWordObj.word}</p>
            <div
              style={{
                width: "90%",
                marginTop: "40px",
                marginBottom: "30px",
              }}
            >
              <div className="text-game-buttons-container">
                <TextGameButton gameButtonIndex={1} />
                <TextGameButton gameButtonIndex={3} />
                <TextGameButton gameButtonIndex={4} />
              </div>
            </div>
            {/* <GameButton gameButtonIndex={0} /> */}
          </div>
        ) : (
          <div>
            {gameEnded ? (
              <div className="text-classification-game-container">
                <p className="text-classification-title">
                  Congratulations! You did well!
                </p>
                <p className="text-game-score-title">Previous score:</p>
                <p className="text-game-score">{prevScore}</p>
                <TextGameButton gameButtonIndex={5} timeout={1000} />
              </div>
            ) : (
              <>
                <Fade in={fadeInInstructionsText} timeout={1000}>
                  <div className="instructions-container">
                    <p className="text-classification-title">Instructions:</p>

                    <p className="text-instructions">
                      1. Read the displayed word and decide if it has been shown
                      before or not.
                    </p>
                    <p className="text-instructions">
                      2. Click "Seen" if you believe the word has been displayed
                      before, or click "New" if you think it hasn't.
                    </p>
                    <p className="text-instructions">
                      3.Score 1 point for each correct response, and a new word
                      will be automatically shown for the next decision.
                    </p>
                  </div>
                </Fade>
                <Fade in={fadeInInstructionsText} timeout={1000}>
                  <div className="text-classification-game-container">
                    <p className="text-classification-title">Current score:</p>
                    <p className="text-game-score">{score}</p>
                  </div>
                </Fade>
                <div className="flex-container">
                  <TextGameButton gameButtonIndex={2} timeout={1000} />
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TextClassificationGame;
