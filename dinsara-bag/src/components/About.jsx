import './About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div className="about-image-wrap">
          <div className="about-img-frame">
            <img src="/image.jpg" alt="Dinsara - Owner of Dinsara Bag" />
          </div>
          <div className="about-decor decor1">🎒</div>
          <div className="about-decor decor2">🧸</div>
        </div>

        <div className="about-content">
          <div className="about-badge">👋 About Us</div>
          <h2 className="about-title">Hi, I'm <span>Dinsara!</span></h2>
          <p className="about-text">
            Welcome to Dinsara Bag — your go-to destination for adorable, high-quality bags and toys in Sri Lanka.
            I started this business with a passion for bringing smiles to kids and families through colorful, fun products.
          </p>
          <p className="about-text">
            Every bag is carefully selected to ensure quality, durability, and cuteness. From personalized cartoon backpacks
            to soft teddy bears, we have something special for everyone.
          </p>

          <div className="about-stats">
            <div className="stat">
              <span className="stat-num">500+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat">
              <span className="stat-num">5+</span>
              <span className="stat-label">Product Types</span>
            </div>
            <div className="stat">
              <span className="stat-num">100%</span>
              <span className="stat-label">Quality Assured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
