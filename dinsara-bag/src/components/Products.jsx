import './Products.css'

const products = [
  {
    id: 1,
    image: '/bag1.jpg',
    name: 'Minnie Mouse Bag',
    desc: 'Adorable Minnie Mouse cartoon backpack. Personalized with your child\'s name!',
    tag: 'Best Seller ⭐',
    color: '#ff4d9e',
  },
  {
    id: 2,
    image: '/bag2.jpg',
    name: 'Paw Patrol Dog Bag',
    desc: 'Fun yellow Paw Patrol inspired backpack — every kid\'s favourite character!',
    tag: 'Trending 🔥',
    color: '#ffd60a',
  },
  {
    id: 3,
    image: '/bag3.jpg',
    name: 'Blue Minnie Bag',
    desc: 'Bright blue Minnie Mouse bag with a cute bow. Perfect for school and outings.',
    tag: 'Popular 💙',
    color: '#00b4d8',
  },
  {
    id: 4,
    image: '/bag4.jpg',
    name: 'Cute Girl Face Bag',
    desc: 'Sweet red cartoon girl face backpack — soft, light and super cute for little ones.',
    tag: 'New Arrival ✨',
    color: '#e63946',
  },
  {
    id: 5,
    image: null,
    emoji: '👜',
    name: 'Cartoon Hand Bags',
    desc: 'Trendy cartoon-themed handbags perfect for everyday use and gifting.',
    tag: 'Trending 🔥',
    color: '#7b2d8b',
  },
  {
    id: 6,
    image: null,
    emoji: '🍱',
    name: 'Lunch Bags',
    desc: 'Cute and practical lunch bags to keep food fresh. Kids will love these at school!',
    tag: 'Popular 💛',
    color: '#ff8c00',
  },
  {
    id: 7,
    image: null,
    emoji: '👛',
    name: 'Purses',
    desc: 'Stylish mini purses in vibrant colors — great for kids and young ladies.',
    tag: 'New Arrival ✨',
    color: '#0077b6',
  },
  {
    id: 8,
    image: null,
    emoji: '🧸',
    name: 'Teddy Bears',
    desc: 'Super soft and huggable teddy bears in various sizes. Perfect gifts for all ages!',
    tag: 'Gift Idea 🎁',
    color: '#e63946',
  },
]

const WA_NUMBER = '94741935073'

export default function Products() {
  const orderOnWhatsApp = (name) => {
    const text = `Hello Dinsara Bag! 👋%0AI'm interested in: ${name}`
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank')
  }

  return (
    <section className="products" id="products">
      <h2 className="section-title">Our Products</h2>
      <p className="section-subtitle">Handpicked with love — find the perfect bag for your little one</p>

      <div className="products-grid">
        {products.map(p => (
          <div className="product-card" key={p.id}>
            {p.image ? (
              <div className="product-img-wrap">
                <img src={p.image} alt={p.name} className="product-img" />
              </div>
            ) : (
              <div className="product-icon-wrap" style={{ background: `linear-gradient(135deg, ${p.color}cc, ${p.color})` }}>
                <span className="product-emoji">{p.emoji}</span>
              </div>
            )}
            <div className="product-tag">{p.tag}</div>
            <h3 className="product-name">{p.name}</h3>
            <p className="product-desc">{p.desc}</p>
            <button className="btn btn-primary product-btn" onClick={() => orderOnWhatsApp(p.name)}>
              Order Now 💬
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
