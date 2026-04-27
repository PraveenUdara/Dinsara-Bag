import { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = ['Home', 'Products', 'About', 'Contact']

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <img src="/logo.jpg" alt="Dinsara Bag Logo" className="brand-logo"
          onError={e => { e.target.style.display='none' }}
        />
        <span className="brand-name">Dinsara Bag</span>
      </div>

      <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        <span className={open ? 'bar open' : 'bar'}></span>
        <span className={open ? 'bar open' : 'bar'}></span>
        <span className={open ? 'bar open' : 'bar'}></span>
      </button>

      <ul className={`nav-links ${open ? 'active' : ''}`}>
        {links.map(link => (
          <li key={link}>
            <button onClick={() => scrollTo(link)}>{link}</button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
