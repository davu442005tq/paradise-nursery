import { Routes, Route, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProductList from './components/ProductList'
import './App.css'

function LandingPage() {
  const navigate = useNavigate()

  return (
    <main className="hero-section">
      <div className="hero-content">
        <h1 className="company-name">Paradise Nursery</h1>
        <p className="tagline">
          Your one-stop destination for premium indoor and outdoor plants.
          Bring nature home and transform your space into a lush green paradise.
        </p>
        <button className="get-started-btn" onClick={() => navigate('/products')}>
          Get Started
        </button>
      </div>
      <div className="hero-image">
        <div className="plant-decoration">
          <div className="leaf leaf-1"></div>
          <div className="leaf leaf-2"></div>
          <div className="leaf leaf-3"></div>
          <div className="leaf leaf-4"></div>
        </div>
      </div>
    </main>
  )
}

function App() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity)
  const navigate = useNavigate()

  return (
    <div className="app">
      <header className="navbar">
        <div className="logo" onClick={() => navigate('/')}>Paradise Nursery</div>
        <nav>
          <a href="/" onClick={(e) => { e.preventDefault(); navigate('/') }}>Home</a>
          <a href="/products" onClick={(e) => { e.preventDefault(); navigate('/products') }}>Plants</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <div className="cart-icon" onClick={() => navigate('/cart')}>
            🛒
            {totalQuantity > 0 && <span className="cart-badge">{totalQuantity}</span>}
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </div>
  )
}

export default App
