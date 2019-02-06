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
            <NavLink to="/legal/terms" title="Terms page">
              Terms
            </NavLink>
          </li>
          <li>
            <NavLink to="/legal/privacy" title="Privacy page">
              Privacy
            </NavLink>
          </li>
        </ul>
        <p className="a-copy">© {new Date().getFullYear()} - Runaway pets</p>
      </nav>
    </footer>
  )
}
