import React from 'react'
import "./Nav.css"
function Navbar() {
  return (
    
  <nav className="navbar  navbar-light ">
        <div className="container-fluid">
          <a className="navbar-brand Nav1">Subhash</a>
          <form className="d-flex">
            <div className='icons'>
                <i className="fa-solid icons-1 fa-magnifying-glass" />
                <i className="fa-regular icons-2 fa-circle-user" />
            </div>
          </form>
        </div>
      </nav>
    
  )
}

export default Navbar