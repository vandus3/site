import "./css/App.css";
import Lenis from "lenis";
import Intro from "./components/Intro";
import About from "./components/About";
import Repos from "./components/Repos";
import { use, useEffect, useState } from "react";

export default function App() {
  const lenis = new Lenis({
    autoRaf: true,
  });
  lenis.on("scroll", (e) => {
    console.log(e);
  });

  useEffect(() => {
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, [lenis]);

  return (
    <div className="app">
      <Intro />
      <About />
      <Repos />
    </div>
  );
}
