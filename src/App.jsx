import './App.css'
import { useState } from 'react'
import { Route, Routes } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { About, Events, Games, Home, Join } from "./components/pages";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-foresee" element={<About />} />
        <Route path="/join-foresee" element={<Join />} />
        <Route path="/events" element={<Events />} />
        <Route path="/educational-games" element={<Games />} />
      </Routes>
    </>
  )
}

export default App
