import "./Games.css"
import SnakeGameImage from "../../assets/Games/SnakeGame.png"

export const Games = () => {
  return (
    <>
      <p className="game-title">Explore Our Educational Games</p>
      <img src={SnakeGameImage} alt="" />
    </>
  )
};
