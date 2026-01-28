import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className='w-50 bg-info p-3  navbar d-lg-flex d-none '>
        <Link to="/"  className='text-dark text-decoration-none'>About</Link>
        <Link to="/resume" className='text-dark text-decoration-none'>Resume</Link>
        <Link to="/contact" className='text-dark text-decoration-none'>Contact</Link>
    </div>

    {/* small screen */}
   <div className="w-100 position-fixed bottom-0 start-0 bg-danger d-lg-none d-flex justify-content-around py-2">
        <Link to="/"  className='text-dark text-decoration-none'>About</Link>
        <Link to="/contact" className='text-dark text-decoration-none'>Contact</Link>
        <Link to="/resume" className='text-dark text-decoration-none'>Resume</Link>
    </div>
    
    </>
  )
}

export default Navbar