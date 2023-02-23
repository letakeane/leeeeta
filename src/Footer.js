import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <section className="links">
        <NavLink exact to="/">home</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/work">work</NavLink>
        <NavLink to="/contact">contact</NavLink>
      </section>
    </footer>
  )
}

export default Footer;