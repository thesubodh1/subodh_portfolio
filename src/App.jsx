import { useState } from "react";
import "./App.css";

import Hero from "./Components/Hero";
import About from "./Components/About";
import Ribbon from "./Components/Ribbon";
import Gallery from "./Components/Gallery";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Ribbon text="My Latest Projects"/>
      <Gallery />
    </>
  );
}

export default App;
