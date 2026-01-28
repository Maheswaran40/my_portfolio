import React from "react";
import Sidebar from "./Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Resume from "./Resume";

function Common() {
  return (
    <div id="App-root">
      <div className="App-child ">
        <Sidebar />
      </div>
  

      <div className="App-child  ">

        <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home/>}/>
          <Route path="/contact" element={ <Contact/>}/>
          <Route path="/resume" element={ <Resume/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default Common;
