import "./Games.css";
import SnakeGameImage from "../../assets/games-page/SnakeGame.png";
import HealthyHabitsImage from "../../assets/games-page/HealthyHabits.png";
import TextGameImage from "../../assets/games-page/TextGame.png";
import { Link } from "react-router-dom";
// import Test from "@isaacindex/snake-on-page"

export const Games = () => {
  // const handleGameClick = (path) => {
  //   const baseUrl = `${window.location.origin}/${'foresee-revamp2'}`
  //   window.open(`${baseUrl}${path}`, '_self')
  // }

  return (
    <>
      <p className="games-heading">Explore Our Educational Games</p>
      {/* Snake Game */}
      <div className="game-container">
        <img className="game-image" src={SnakeGameImage} alt="" />
        <div>
          <p className="game-heading">Colourblindness Snake Game</p>
          <p className="game-paragraph">
            In this game, you control the snake with either keyboard or virtual
            joystick. When an apple is eaten, screen will switch to a
            colourblindness.
          </p>
          <Link to="/snake-on-page">Play</Link>
        </div>
      </div>
      <div className="game-container">
        <img className="game-image" src={TextGameImage} alt="" />
        <div>
          <p className="game-heading">Text Classification Game</p>
          <p className="game-paragraph">
            A memory game where you decide whether a word has already been shown
            or not.
          </p>
          <Link to="/text-classification">Play</Link>
        </div>
      </div>
      <div className="game-container">
        <img className="game-image" src={HealthyHabitsImage} alt="" />
        <div>
          <p className="game-heading">Healthy Habits Game Classification</p>
          <p className="game-paragraph">
            A health-focused game where you decide whether habits depicted in
            images represent a healthy or unhealthy habit
          </p>
          <Link to="/healthy-habits">Play</Link>
        </div>
      </div>
    </>
  );
};
