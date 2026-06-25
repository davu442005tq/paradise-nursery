import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../store/cartSlice'
import productsData, { categories } from './productsData'
import './ProductList.css'

function ProductList() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)

  const filteredProducts = productsData.filter((product) => {
    const matchCategory = activeCategory === 'All' || product.category === activeCategory
    const matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchSearch
  })

  const handleAddToCart = (product) => {
    dispatch(addItem({ ...product, quantity: 1 }))
  }

  const getCartQuantity = (productId) => {
    const item = cartItems.find((item) => item.id === productId)
    return item ? item.quantity : 0
  }

  return (
    <div className="product-list-page">
      <div className="pl-header">
        <h1 className="pl-title">Our Plants</h1>
        <p className="pl-subtitle">
          Browse our collection of premium plants
        </p>
      </div>

      <div className="pl-controls">
        <input
          type="text"
          className="pl-search"
          placeholder="Search plants..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="pl-categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`pl-cat-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="pl-empty">
          <p>No plants found matching your criteria.</p>
        </div>
      ) : (
        <div className="pl-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="pl-card">
              <div className="pl-card-image">
                <span className="pl-emoji">{product.image}</span>
              </div>
              <div className="pl-card-body">
                <span className="pl-category-tag">{product.category}</span>
                <h3 className="pl-card-title">{product.name}</h3>
                <p className="pl-card-desc">{product.description}</p>
                <div className="pl-card-footer">
                  <span className="pl-price">${product.price.toFixed(2)}</span>
                  <button
                    className="pl-add-btn"
                    onClick={() => handleAddToCart(product)}
                  >
                    {getCartQuantity(product.id) > 0
                      ? `Add Again (${getCartQuantity(product.id)})`
                      : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductList
