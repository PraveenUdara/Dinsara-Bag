import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    // WhatsApp order link
    const text = `Hello Dinsara Bag! 👋%0AName: ${form.name}%0APhone: ${form.phone}%0AMessage: ${form.message}`
    window.open(`https://wa.me/94741935073?text=${text}`, '_blank')
    setSent(true)
    setForm({ name: '', phone: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">Place your order or ask us anything — we'd love to hear from you!</p>

      <div className="contact-inner">
        <div className="contact-info">
          <h3>Contact Details</h3>
          <div className="info-item">
            <span className="info-icon">📱</span>
            <div>
              <strong>WhatsApp / Call</strong>
              <p>+94 74 193 5073</p>
            </div>
          </div>
          <div className="info-item">
            <span className="info-icon">📍</span>
            <div>
              <strong>Location</strong>
              <p>Sri Lanka</p>
            </div>
          </div>
          <div className="info-item">
            <span className="info-icon">🕐</span>
            <div>
              <strong>Working Hours</strong>
              <p>Mon – Sat: 8am – 8pm</p>
            </div>
          </div>
          <div className="social-links">
            <a href="#" className="social-btn facebook" aria-label="Facebook">
              <span>f</span> Facebook
            </a>
            <a href="https://wa.me/94741935073" className="social-btn whatsapp" aria-label="WhatsApp" target="_blank" rel="noreferrer">
              <span>💬</span> WhatsApp
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {sent && <div className="success-msg">✅ Redirecting to WhatsApp...</div>}
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Order / Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Tell us what you'd like to order..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary submit-btn">
            Send via WhatsApp 💬
          </button>
        </form>
      </div>
    </section>
  )
}
