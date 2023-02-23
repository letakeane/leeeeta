import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <section className="links">
        <NavLink exact to="/" className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }>home</NavLink>
        <NavLink to="/about" className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }>about</NavLink>
        <NavLink to="/work" className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }>work</NavLink>
        <NavLink to="/contact" className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }>contact</NavLink>
      </section>
    </footer>
  )
}

export default Footer;