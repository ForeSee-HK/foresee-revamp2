import "./Games.css"
import SnakeGameImage from "../../assets/games-page/SnakeGame.png"
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
          <p className="game-paragraph">In this game, you control the snake with either keyboard or virtual joystick. When an apple is eaten, screen will switch to a colourblindness.</p>
          <Link to="/snake-on-page">Play</Link>
        </div>
      </div>


    </>
  )
};
