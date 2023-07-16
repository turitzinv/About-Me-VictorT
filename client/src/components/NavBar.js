import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

  return (
    <div className = "nav-bar">
      <NavLink className = "nav-link" to="/" >
        Home
      </NavLink>
      <NavLink className = "nav-link" to="/hobbies" >
        Hobbies
      </NavLink>
      <NavLink className = "nav-link" to="/projects">
        Projects
      </NavLink>
    </div>
  )
}

export default NavBar