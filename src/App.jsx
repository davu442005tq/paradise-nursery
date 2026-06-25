import './App.css'

function App() {
  return (
    <div className="landing">
      <header className="navbar">
        <div className="logo">Paradise Nursery</div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Plants</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <main className="hero-section">
        <div className="hero-content">
          <h1 className="company-name">Paradise Nursery</h1>
          <p className="tagline">
            Your one-stop destination for premium indoor and outdoor plants.
            Bring nature home and transform your space into a lush green paradise.
          </p>
          <button className="get-started-btn">Get Started</button>
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
    </div>
  )
}

export default App
