import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { About, Events, Games, Home, Join } from "./components/pages";

// Games
import SnakeOnPage from "@isaacindex/snake-on-page";
// // import GameScreen from "@kriffendy/fs-game";
// // import TextClassificationGame from "@kriffendy/fs-game";
// // import HealthQuiz from "@kriffendy/fs-game";
// import HealthQuiz from "@kriffendy/fs-game/src/screens/healthQuiz";
// import TextClassificationGame from "@kriffendy/fs-game/src/screens/textClassification";
import GameScreen from "./other-games/screens/gameScreen";
import TextClassificationGame from "./other-games/screens/textClassification";
import HealthQuiz from "./other-games/screens/healthQuiz";

// Main layout component with navbar
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="page-content">
        <Outlet />
      </div>
    </>
  );
};

// Layout component without navbar
const GameLayout = () => {
  return (
    <>
      <Link to="/" style={{ left: 0, position: "fixed", zIndex: 999 }}>
        Home
      </Link>
      <Outlet />
    </>
  );
};

function App() {
  return (
    <>
      {/* <Navbar />
      <div className="page-content"> */}
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<About />} />
          {/* <Route path="/about-foresee" element={<About />} /> */}
          <Route path="/join-foresee" element={<Join />} />
          <Route path="/events" element={<Events />} />
          <Route path="/educational-games" element={<Games />} />
        </Route>

        {/* Game Routes */}
        <Route element={<GameLayout />}>
          <Route path="/snake-on-page" element={<SnakeOnPage />} />
          <Route
            path="/text-classification"
            element={
              <GameScreen
                gameTitle="Text Classification Memory Game"
                gameDesc="A memory game where you decide whether a word has already been shown or not."
              >
                <TextClassificationGame />
              </GameScreen>
            }
          />
          <Route
            path="/healthy-habits"
            element={
              <GameScreen
                gameTitle="Healthy Habits Game Classification"
                gameDesc="A health-focused game where you decide whether habits depicted in images represent a healthy or unhealthy habit"
              >
                <HealthQuiz />
              </GameScreen>
            }
          />
        </Route>
      </Routes>
      {/* </div > */}
    </>
  );
}

export default App;
