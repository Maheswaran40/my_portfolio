import React, { useState } from "react";
import "./index.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Mywork from "./pages/Mywork";
function App() {
  const [gradient, setGradient] = useState(
    "linear-gradient(45deg, rgb(17,17,73), rgba(12, 1, 1, 1), rgba(80, 4, 70, 1))"
  );
  const handleMouseMove = (e) => {
    const x = e.clientX / window.innerWidth; // 0 to 1
    const y = e.clientY / window.innerHeight; // 0 to 1

    const color1 = `rgb(${Math.floor(10 + x * 10)}, ${Math.floor(
      1 + y * 10
    )}, ${Math.floor(73 - y * 30)})`;
    const color2 = `rgb(${Math.floor(19 + y * 10)}, ${Math.floor(
      9 + x * 10
    )}, ${Math.floor(29 - x * 20)})`;
    const color3 = `rgb(${Math.floor(53 - x * 10)}, ${Math.floor(
      5 + y * 10
    )}, ${Math.floor(15 + x * 20)})`;

    setGradient(`linear-gradient(25deg, ${color1}, ${color2}, ${color3})`);
  };

  return (
    <>
      <div
        id="home-div"
         style={{
        height: "100vh",
        width: "100vw",
        background: gradient,
        transition: "background 0.1s",
      }}
        onMouseMove={handleMouseMove}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/mywork" element={<Mywork />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
