import React, { useEffect } from "react";
import SplitText from "./Split";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./About";
// import Navbar from "./Navbar";
import profile from "../assets/images/my_profile.jpg";
import "../index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import image from "../assets/images/aboutme.png";
import student from "../assets/images/student-icon.png";
import degree from "../assets/images/icons8-degree-60.png";

function Home() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (in ms)
      once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <>
      {/* <Navbar/> */}
      <div>
        {/* home */}

        <div className="container">
          <div
            className="row d-flex align-items-center justify-content-center"
            style={{ height: "700px" }}
          >
            <div className="col-lg-6 col-md-12">
              {/* image */}
              <div className="p-2 d-flex justify-content-center">
                <img
                  id="profile"
                  src={profile}
                  alt=""
                  style={{ borderRadius: "100%" }}
                  data-aos="fade-right"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              {/* SplitText Example */}
              <div id="splittext" data-aos="fade-left">
                <SplitText
                  text="It's Me, Maheswaran S"
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
                <h4 className="text-center">
                  💻 Turning ideas into scalable web solutions
                </h4>
                <div id="icons">
                  <a href="mailto:eswermahes@gmail.com">
                    <i class="fa-solid fa-envelope fa-2x"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/maheswaran-s4074">
                    <i class="fa-brands fa-linkedin fa-2x"></i>
                  </a>
                  <a href="https://github.com/Maheswaran40">
                    <i class="fa-brands fa-github fa-2x"></i>
                  </a>
                </div>
                <br />
                <div className="d-flex justify-content-between button2nd">
                  <button class="beautiful-button">Download Resume</button>
                  <button class="beautiful-button">
                    <i class="fa-brands fa-whatsapp"></i> &nbsp; Drop a message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <About/> */}
        <br />
        <div className="container">
          <div id="splittext">
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
            <br /> <br />
            <br />
            <div className="row w-100">
              <div
                className="col-lg-6 col-12 d-flex justify-content-center"
                data-aos="fade-right"
              >
                <img src={image} width="300" height="200" alt="" />
              </div>
              <div className="col-lg-6 col-12 paragraph" data-aos="fade-left">
                <p className="container" style={{ textAlign: "justify" }}>
                  <i>
                    <u>MERN Stack Trainee and Developer at ILife Academy</u>
                  </i>
                  . Skilled in web development, programming, and database
                  management, with hands-on experience in building responsive
                  applications using React.js and the MERN stack. Currently
                  working as a MERN Stack Developer at iLife Academy,
                  contributing to real-world projects while continuously
                  enhancing technical expertise and problem-solving skills.
                </p>
              </div>
            </div>
            <br />
            <br />
            <br />
            {/* technical skills */}
            <h3>Tech Stacks</h3>
          </div>

          {/* card */}
          <br />
          <div className="text-white cards" data-aos="fade">
            <Swiper
              spaceBetween={30}
              // pagination={{
              //   clickable: true,
              // }}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={3000} // 👈 lower = faster, higher = smoother
              loop={true}
              freeMode={true}
              allowTouchMove={true}
              modules={[Pagination, Autoplay, FreeMode]}
              breakpoints={{
                320: { slidesPerView: 3 },
                425: { slidesPerView: 4 },
                1200: {
                  // desktops
                  slidesPerView: 5,
                },
              }}
              className="mySwiper"
            >
              <SwiperSlide className="swiper d-flex justify-content-center align-items-center">
                <div className="card bg-transparent border-secondary">
                  <div className="card-body">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                      <img
                        src="https://camo.githubusercontent.com/b123b7cd1937e4fc11267e562159764bb15946dd1d23a6ef08f3803ab49da1ba/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f68746d6c2d352e706e67"
                        alt="html"
                        width="50"
                      />
                      <h5>HTML</h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper d-flex justify-content-center align-items-center">
                <div className="card bg-transparent border-secondary">
                  <div className="card-body ">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                      <img
                        src="https://camo.githubusercontent.com/aae5d91491e403b1f9d176ee05ee086627dc901536fb3691c389dfbf97ef9f04/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f637373332e706e67"
                        alt="css icon"
                        width="50"
                      />
                      <h5>CSS</h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper d-flex justify-content-center align-items-center">
                <div className="card bg-transparent border-secondary">
                  <div className="card-body ">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                      <img
                        src="https://camo.githubusercontent.com/6457b86fc8e582d6cc528a3fb75aefb2f33defddbc8b22beebac5f2802169ee3/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f626f6f7473747261702e706e67"
                        width="50"
                        alt="bootstrap icon"
                      />
                      <h5>Bootstrap</h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper d-flex justify-content-center align-items-center">
                <div className="card bg-transparent border-secondary">
                  <div className="card-body ">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                      <img
                        src="https://camo.githubusercontent.com/00dd552ba8020fc50f92364518290fc16235a7f21a5b7ddbc0a6cb2131597356/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f6a6176617363726970742e706e67"
                        width="50"
                        alt="bootstrap icon"
                      />
                      <h5>Java Script</h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper d-flex justify-content-center align-items-center">
                <div className="card bg-transparent border-secondary">
                  <div className="card-body ">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                      <img
                        src="https://camo.githubusercontent.com/0a231a271e64d7b99093df977d12dfdd86db73d63eac0b1415b2620fe1f2726d/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f72656163742d6e61746976652e706e67"
                        width="50"
                        alt="bootstrap icon"
                      />
                      <h5>React JS</h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper d-flex justify-content-center align-items-center">
                <div className="card bg-transparent border-secondary">
                  <div className="card-body ">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                      <img
                        src="https://camo.githubusercontent.com/754d83c6db7b05918c64b485f537f7e07aaa255b0f967a44ff19ec616fbadf51/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f6e6f64656a732e706e67"
                        alt="bootstrap icon"
                      />
                      <h5>Node JS</h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper d-flex justify-content-center align-items-center">
                <div className="card bg-transparent border-secondary">
                  <div className="card-body ">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                      <img
                        src="https://camo.githubusercontent.com/72a52899a8dcde00aaf02882493c7806b27d54bf130b8483741fedfd2a59e8ef/68747470733a2f2f696d672e69636f6e73382e636f6d2f6e6f6c616e2f35302f657870726573732d6a732e706e67"
                        alt="bootstrap icon"
                      />
                      <h5>Express JS</h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper d-flex justify-content-center align-items-center">
                <div className="card bg-transparent border-secondary">
                  <div className="card-body ">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                      <img
                        src="https://camo.githubusercontent.com/b010a2291f794256d711a8e237e9da2f03b54e97896ab6f1b79b3cfac0308399/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f6d6f6e676f64622e706e67"
                        alt="bootstrap icon"
                      />
                      <h5>Mongo DB</h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper d-flex justify-content-center align-items-center">
                <div className="card bg-transparent border-secondary">
                  <div className="card-body ">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                      <img
                        src="https://github.com/Maheswaran40/Maheswaran40/raw/main/assets/swiper-img.png"
                        alt="bootstrap icon"
                        width="50"
                      />
                      <h5>Swiper JS</h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper d-flex justify-content-center align-items-center">
                <div className="card bg-transparent border-secondary">
                  <div className="card-body ">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAh1BMVEVHcEwBVJc3caE2bJdKir3z2mL/6m05daZAfa5Jd5nsyUUqbKFHZ3flw0Towzv+2Uz842rmwTgANYDeuzlFgrL/6nD94WL20ETvxzf50T5Jh7lAfKxAf7E9eqv/5GX/4Fz/6HH/3VNFhbc1cKD/2kowapr/1Dj/10H+/v786a2dt851nL7c5OukoiX2AAAAHHRSTlMAf0dz/ovF/qRkVcoZX2noqUpnMo7r88Ww1sbqk9MnjgAAAR1JREFUKJFl0etygyAQBWCCEIJGozE1TWu9C8b2/Z+vsEscA+ef882RXSBky5nKKJL0TMJINrBhGOr6JwmYMrYCmQhfb8PfstYWhRhlgOvya3vCYBRgPWJPjAHSEwTsDeVpC9h8zfOc41RfjMES7p/jPF8/uq6r4DSwGocBQ2y4Qay5JcAsNk1zMZcW2iwNtW1rr2Yz4eyQg/UlkS9LDi4SrO/7AtGY5EeXCmr9NMWE4qDRscM0rjZNuiQEl0h3BLVJa7PKNxzI/ZrWd4ORHRTwVQNTqrBXlJgdLL79UqlP9yJSUg5WZbFNmmVZsXsZjqddbHTqvSffJmmVynx0p6nn8gwwdZMAFh6SOy6n1DbnW/eB9PDHcSnjotx//wNQ0jN2CWQnkAAAAABJRU5ErkJggg=="
                        alt="python icon"
                        width="50"
                      />
                      <h5>Python</h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <br />
          {/* education */}
        </div>
        <h3>Education</h3>
        <br />
        {/* degree */}
        <div id="degree" className="container " data-aos="fade-left">
          <div className="" id="degree-sub">
            <div>
              <img src={degree} alt="" width="50px" height="50px" />
            </div>
            <div id="degree-content">
              <h4>BCA | Bishop Heber College | 2022–2025 | CGPA: 8.13/10</h4>
            </div>
          </div>
        </div>
        <br />
        {/* higher secondary */}
        <div id="school" className="container "data-aos="fade-right">
          <div className="" id="school-sub">
            <div id="degree-content">
              <h4>Higher Secondary (XII) | Bishop Heber Hr. Sec. School | 2022 | 74%</h4>
            </div>
             <div>
              <img src={student} alt="" width="50px" height="50px" />
            </div>
          </div>
        </div>
        <br />
        {/* secondary */}
        <div id="degree" className="container " data-aos="fade-left">
          <div className="" id="degree-sub">
            <div>
              <img src={student} alt="" width="50px" height="50px" />
            </div>
            <div id="degree-content">
              <h4>Secondary (X) | Bishop Heber Hr. Sec. School | 2020 | 76%</h4>
            </div>
          </div>
        </div>

              
        {/* *888 */ }
        <br />
      </div>
    </>
  );
}

export default Home;
