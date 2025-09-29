import React, { useEffect } from "react";
import SplitText from "./Split";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Home() {
const navigate=useNavigate()

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
   useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (in ms)
      once: true,     // whether animation should happen only once
    });
  }, []);
  
  return (
    <>
    <Navbar/>
      <div className="w-100 h-100 justify-content-center d-flex align-items-center">
       
        {/* SplitText Example */}
        <div id="splittext">
          <SplitText
            text="It's Me, Maheswaran"
            className="text-2xl font-semibold text-center"
            delay={50} // ms between letters
            duration={0.6} // each letter animation duration
            ease="power3.out"
            splitType="chars" // or "words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            tag="h1" // can be "p", "h1", "h2", etc.
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <h3>Full Stack Developer</h3>
          <h3 className="text-center">💻 Turning ideas into scalable web solutions</h3><br />
          <div className="d-flex justify-content-between button2nd" >
            <button class="beautiful-button" onClick={()=>navigate("/mywork")}>View Project</button>
            <button class="beautiful-button">Hire Me</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
