import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate=useNavigate()
  return (
    <>
       <div
          className="d-flex justify-content-end w-100  top-0 position-absolute"
          id="navbar"
          
        >
          <div className="d-flex justify-content-between " id="navbar2" >
            <button className="navbar-button" onClick={()=>navigate("/")}>Home</button>
            <button className="navbar-button" onClick={()=>navigate("/about")}>About</button>
            <button className="navbar-button" onClick={()=>navigate("/mywork")}> My Work </button>
            <button className="navbar-button" onClick={()=>navigate("/contact")}>Contact</button>
          </div>
        </div>  
    </>
  )
}

export default Navbar