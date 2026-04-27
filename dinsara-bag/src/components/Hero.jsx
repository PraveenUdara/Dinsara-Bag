import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-badge">✨ Sri Lanka's Cutest Bags</div>
        <h1 className="hero-title">
          Welcome to <span>Dinsara Bag</span>
        </h1>
        <p className="hero-desc">
          Adorable cartoon bags, handbags, lunch bags, purses & teddy bears — made with love for kids and families!
        </p>
        <div className="hero-btns">
          <button className="btn btn-primary" onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}>
            Shop Now 🛍️
          </button>
          <button className="btn btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Contact Us 📞
          </button>
        </div>
        <div className="hero-emojis">🎒 👜 🧸 👛 🍱</div>
      </div>

      <div className="hero-image-wrap">
        <div className="hero-img-circle">
          <img
            src="/logo.jpg"
            alt="Dinsara Bag Logo"
            className="hero-logo-img"
            onError={e => { e.target.src = '/bag1.jpg'; e.target.style.objectFit='cover'; }}
          />
        </div>
        <div className="floating-badge badge1">Kids Bags 🎒</div>
        <div className="floating-badge badge2">Teddy Bears 🧸</div>
        <div className="floating-badge badge3">Purses 👛</div>
      </div>
    </section>
  )
}
