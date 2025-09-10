import "./css/App.css";
import Lenis from "lenis";
import Intro from "./components/Intro";
import About from "./components/About";
export default function App() {
  const lenis = new Lenis({
    autoRaf: true,
  });
  lenis.on("scroll", (e) => {
    console.log(e);
  });
  return (
    <div className="app">
      <Intro />
      <About />
    </div>
  );
}
