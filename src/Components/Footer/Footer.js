import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="m-footer">
      <nav>
        <ul>
          <li>
            <NavLink to="/" title="Homepage">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/terms" title="Terms">
              Terms
            </NavLink>
          </li>
          <li>
            <NavLink to="/privacy" title="Privacy">
              Privacy
            </NavLink>
          </li>
        </ul>
        <p className="a-copy">© {new Date().getFullYear()} - Runaway pets</p>
      </nav>
    </footer>
  )
}
