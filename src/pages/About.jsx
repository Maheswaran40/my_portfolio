import React, { useEffect } from "react";
// import Navbar from "./Navbar";
import SplitText from "./Split";
import profile from "../assets/images/my_profile.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <div style={{ height: "8vh" }}>
        {/* <Navbar /> */}
      </div>
      <div
        style={{
          overflowY: "scroll",
          position: "absolute",
          width: "100%",
          height:"50%"
        }}
      >
        <div style={{ position: "relative", top: "10px", zIndex: "0" }}>
          <div
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
              top: "0px",
              position: "relative",
            }}
          >
            <SplitText
              text="About Me"
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
          </div>
          <div
            className="container  w-100"
            style={{ color: "white", top: "10px", position: "relative" }}
          >
            <div className="row">
              <div className="col-lg-6  w-50">
                <div className="p-2 d-flex justify-content-center">
                  <img
                    src={profile}
                    alt=""
                    width="400"
                    height="450"
                    style={{ borderRadius: "100%" }}
                  />
                </div>
              </div>
              <div className="col-lg-6  w-50">
                <div className="p-2 h-100 d-flex justify-content-center align-items-center">
                  <h5 id="h5">
                    {" "}
                    BCA undergraduate with strong skills in web development,
                    programming, and database management. Experienced in
                    building responsive applications using React.js and MERN
                    stack. Seeking an entry-level IT role to apply and expand
                    technical expertise while contributing to innovative
                    projects.
                  </h5>
                </div>
              </div>
            </div>
          </div>
          {/* technical skills */}
          <br />
          <br />
          <div className="text-white container" data-aos="fade-right">
            <p className="text-white bg">
          niam vel suscipit atque fuga illum amet.
            </p>
          </div>
        </div>
                  <div className="row ">
            {/* Frontend */}
            <div
              className="col-sm-6 col-lg-6 d-flex justify-content-center my-2"
              data-aos="fade-right"
            >
              <div className="techskill-div px-3">
                <h5>FRONTEND TECHNOLOGIES :</h5>
                <br />
                <div className="row">
                  <div
                    className="col-lg-4  col-6 my-1 "
                    data-aos="fade-right"
                    data-aos-delay="0"
                  >
                    <div className="d-flex justify-content-center align-items-center flex-column">
                      <img
                        src="https://camo.githubusercontent.com/b123b7cd1937e4fc11267e562159764bb15946dd1d23a6ef08f3803ab49da1ba/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f68746d6c2d352e706e67"
                        alt="html"
                        width="100"
                      />
                      <h5>HTML</h5>
                    </div>
                  </div>
                  <div
                    className="col-lg-4  col-6 my-1"
                    data-aos="fade-right"
                    data-aos-delay="200"
                  >
                    <div className="d-flex justify-content-center align-items-center flex-column">
                      <img
                        src="https://camo.githubusercontent.com/aae5d91491e403b1f9d176ee05ee086627dc901536fb3691c389dfbf97ef9f04/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f637373332e706e67"
                        alt="css icon"
                        width="100"
                      />
                      <h5>CSS</h5>
                    </div>
                  </div>
                  <div
                    className="col-lg-4  col-6 my-1"
                    data-aos="fade-right"
                    data-aos-delay="400"
                  >
                    <div className="d-flex justify-content-center align-items-center flex-column">
                      <img
                        src="https://camo.githubusercontent.com/6457b86fc8e582d6cc528a3fb75aefb2f33defddbc8b22beebac5f2802169ee3/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f626f6f7473747261702e706e67"
                        width="100"
                        alt="bootstrap icon"
                      />
                      <h5>Bootstrap</h5>
                    </div>
                  </div>
                  <div
                    className="col-lg-4  col-6 my-1"
                    data-aos="fade-right"
                    data-aos-delay="600"
                  >
                    <div className="d-flex justify-content-center align-items-center flex-column">
                      <img
                        src="https://camo.githubusercontent.com/00dd552ba8020fc50f92364518290fc16235a7f21a5b7ddbc0a6cb2131597356/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f6a6176617363726970742e706e67"
                        width="100"
                        alt="js icon"
                      />
                      <h5>Java Script</h5>
                    </div>
                  </div>
                  <div
                    className="col-lg-4  col-6 my-1 "
                    data-aos="fade-right"
                    data-aos-delay="800"
                  >
                    <div className="d-flex justify-content-center align-items-center flex-column">
                      <img
                        src="https://camo.githubusercontent.com/0a231a271e64d7b99093df977d12dfdd86db73d63eac0b1415b2620fe1f2726d/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f72656163742d6e61746976652e706e67"
                        width="100"
                        alt="js icon"
                      />
                      <h5>React JS</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            {/* backen tech */}
            <div
              className="col-sm-6 col-lg-6 d-flex justify-content-center my-2"
              data-aos="fade-left"
            >
              <div className="techskill-div px-3 ">
                <h5>BACKEND TECHNOLOGIES :</h5>
                <br />
                <div className="row">
                  <div
                    className="col-lg-4  col-6 my-1 "
                    data-aos="fade-right"
                    data-aos-delay="0"
                  >
                    <div className="d-flex justify-content-center align-items-center flex-column">
                      <img
                        src="https://camo.githubusercontent.com/754d83c6db7b05918c64b485f537f7e07aaa255b0f967a44ff19ec616fbadf51/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f6e6f64656a732e706e67"
                        alt="html"
                        width="100"
                      />
                      <h5>Node JS</h5>
                    </div>
                  </div>
                  <div
                    className="col-lg-4  col-6 my-1 "
                    data-aos="fade-right"
                    data-aos-delay="200"
                  >
                    <div className="d-flex justify-content-center align-items-center flex-column">
                      <img
                        src="https://camo.githubusercontent.com/72a52899a8dcde00aaf02882493c7806b27d54bf130b8483741fedfd2a59e8ef/68747470733a2f2f696d672e69636f6e73382e636f6d2f6e6f6c616e2f35302f657870726573732d6a732e706e67"
                        alt="css icon"
                        width="100"
                      />
                      <h5>Express JS</h5>
                    </div>
                  </div>
                  <div
                    className="col-lg-4  col-6 my-1 "
                    data-aos="fade-right"
                    data-aos-delay="400"
                  >
                    <div className="d-flex justify-content-center align-items-center flex-column">
                      <img
                        src="https://camo.githubusercontent.com/b010a2291f794256d711a8e237e9da2f03b54e97896ab6f1b79b3cfac0308399/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f6d6f6e676f64622e706e67"
                        width="100"
                        alt="bootstrap icon"
                      />
                      <h5>Mongo DB</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            {/* Tools */}
            <div
              className="col-sm-6 col-lg-6 d-flex justify-content-center my-2"
              data-aos="fade-right"
            >
              <div className="techskill-div px-3">
                <h5>TOOLS :</h5>
                <br />
                <div className="row">
                  <div
                    className="col-lg-4  col-6 my-1 "
                    data-aos="fade-right"
                    data-aos-delay="0"
                  >
                    <div className="d-flex justify-content-center align-items-center flex-column">
                      <img
                        src="https://camo.githubusercontent.com/d7abf49b0eee3ec680030814409c54313a2fcec8221126ce145da1c580f723b3/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f76697375616c2d73747564696f2d636f64652d323031392e706e67"
                        alt="html"
                        width="100"
                      />
                      <h5>VS Code</h5>
                    </div>
                  </div>
                  <div
                    className="col-lg-4  col-6 my-1 "
                    data-aos="fade-right"
                    data-aos-delay="200"
                  >
                    <div className="d-flex justify-content-center align-items-center flex-column">
                      <img
                        src="https://github.com/Maheswaran40/Maheswaran40/raw/main/assets/swiper-img.png"
                        alt="css icon"
                        width="100"
                      />
                      <h5>Swiper</h5>
                    </div>
                  </div>
                  <div
                    className="col-lg-4  col-6 my-1 "
                    data-aos="fade-right"
                    data-aos-delay="400"
                  >
                    <div className="d-flex justify-content-center align-items-center flex-column">
                      <img
                        src="https://github.com/Maheswaran40/Maheswaran40/raw/main/assets/reactboot-img.png"
                        width="100"
                        alt="bootstrap icon"
                      />
                      <h5>React Bootstrap</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            {/* Tools */}
            <div
              className="col-sm-6 col-lg-6 d-flex justify-content-center my-2 "
              data-aos="fade-left"
            >
              <div className="techskill-div px-3">
                <h5>VERSON CONTROL :</h5>
                <br />
                <div className="row">
                  <div
                    className="col-lg-4  col-6 my-1 "
                    data-aos="fade-right"
                    data-aos-delay="0"
                  >
                    <div className="d-flex justify-content-center align-items-center flex-column">
                      <img
                        src="https://camo.githubusercontent.com/50c0d04ce6070cd311f5f7ca0b6f30313f803cdb6fe9fa7e57bd621304a1baa0/68747470733a2f2f696d672e69636f6e73382e636f6d2f6e6f6c616e2f35302f6769746875622e706e67"
                        alt="html"
                        width="100"
                      />
                      <h5>Github</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default About;
