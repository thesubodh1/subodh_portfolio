import { useState, useEffect } from "react";
import "./App.css";

import Hero from "./Components/Hero";
import About from "./Components/About";
import Ribbon from "./Components/Ribbon";
import Gallery from "./Components/Gallery";

function App() {
  const actualCount = JSON.parse(localStorage.getItem("totalCount")) || 0;
  const [count, setCount] = useState(actualCount);

  function handleCount() {
    setCount((prevCounts) => {
      return prevCounts + 1;
    });
  }

  useEffect(() => {
    localStorage.setItem("totalCount", JSON.stringify(count));
  }, [count]);
  return (
    <>
      <Hero downloadCount={count} onDownload={handleCount} />
      <About />
      <Ribbon text="My Latest Projects" />
      <Gallery />
      <Ribbon text="And I am Learning Everyday" />
    </>
  );
}

export default App;
