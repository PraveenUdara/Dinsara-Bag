import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-icon">🎒</span>
          <span className="footer-name">Dinsara Bag</span>
        </div>
        <p className="footer-tagline">Bringing smiles with every bag 💕</p>
        <div className="footer-links">
          {['Home', 'Products', 'About', 'Contact'].map(link => (
            <button
              key={link}
              onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
            >
              {link}
            </button>
          ))}
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Dinsara Bag. All rights reserved. 🇱🇰</p>
      </div>
    </footer>
  )
}
