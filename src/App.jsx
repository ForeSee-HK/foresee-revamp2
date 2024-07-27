import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Outlet } from 'react-router-dom';

import { Navbar } from "./components/Navbar";
import { About, Events, Games, Home, Join } from "./components/pages";

// Games
import SnakeOnPage from "@isaacindex/snake-on-page"

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
      <Link to="/">Home</Link>
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
        </Route>
      </Routes>
      {/* </div > */}
    </>
  );
}

export default App;
