import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <div className='headerDesign'>
        <ul className='header-list'>
            <li>
            <NavLink aria-label="Home page"
              style={({ isActive }) =>
                isActive ? { color: " rgb(130, 42, 39)" } : { color: "white" }
              }
              to="/"
            >
              Home
            </NavLink>
            </li>

            <li>
            <NavLink aria-label="Blog section"
              style={({ isActive }) =>
                isActive ? { color: " rgb(130, 42, 39)" } : { color: "white" }
              }
              to="/blog"
            >
              Blog
            </NavLink>
            </li>

            <li>
            <NavLink aria-label="About page"
              style={({ isActive }) =>
                isActive ? { color: " rgb(130, 42, 39)" } : { color: "white" }
              }
              to="/about"
            >
              About
            </NavLink>
            </li>

            <li>
            <NavLink aria-label="Contact page"
              style={({ isActive }) =>
                isActive ? { color: " rgb(130, 42, 39)" } : { color: "white" }
              }
              to="/contact"
            >
              Contact
            </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Header