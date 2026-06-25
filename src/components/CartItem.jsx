import { useDispatch, useSelector } from 'react-redux'
import { removeItem, updateQuantity } from '../store/cartSlice'
import './CartItem.css'

function CartItem() {
  const dispatch = useDispatch()
  const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart)

  const handleIncrease = (id, currentQty) => {
    dispatch(updateQuantity({ id, quantity: currentQty + 1 }))
  }

  const handleDecrease = (id, currentQty) => {
    if (currentQty > 1) {
      dispatch(updateQuantity({ id, quantity: currentQty - 1 }))
    }
  }

  const handleRemove = (id) => {
    dispatch(removeItem(id))
  }

  if (items.length === 0) {
    return (
      <div className="cart-empty">
        <div className="cart-empty-icon">🛒</div>
        <h2>Your cart is empty</h2>
        <p>Browse our plant collection and add items to your cart.</p>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <h1 className="cart-title">Shopping Cart</h1>

      <div className="cart-layout">
        <div className="cart-items">
          {items.map((item) => (
            <div key={item.id} className="cart-item-card">
              <div className="cart-item-image">
                <span className="cart-item-emoji">{item.image}</span>
              </div>
              <div className="cart-item-info">
                <h3 className="cart-item-name">{item.name}</h3>
                <span className="cart-item-category">{item.category}</span>
                <p className="cart-item-desc">{item.description}</p>
              </div>
              <div className="cart-item-price">
                <span className="cart-item-unit">${item.price.toFixed(2)}</span>
              </div>
              <div className="cart-item-qty">
                <button
                  className="qty-btn"
                  onClick={() => handleDecrease(item.id, item.quantity)}
                  disabled={item.quantity <= 1}
                >
                  −
                </button>
                <span className="qty-value">{item.quantity}</span>
                <button
                  className="qty-btn"
                  onClick={() => handleIncrease(item.id, item.quantity)}
                >
                  +
                </button>
              </div>
              <div className="cart-item-total">
                <span className="cart-item-subtotal">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
              <button
                className="cart-remove-btn"
                onClick={() => handleRemove(item.id)}
                title="Remove item"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2 className="summary-title">Order Summary</h2>
          <div className="summary-row">
            <span>Total Items</span>
            <span>{totalQuantity}</span>
          </div>
          <div className="summary-row">
            <span>Total Products</span>
            <span>{items.length}</span>
          </div>
          <div className="summary-divider"></div>
          <div className="summary-row summary-total">
            <span>Total Amount</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
