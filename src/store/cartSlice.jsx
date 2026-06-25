import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload
      const existingItem = state.items.find((item) => item.id === newItem.id)
      if (existingItem) {
        existingItem.quantity += newItem.quantity || 1
      } else {
        state.items.push({ ...newItem, quantity: newItem.quantity || 1 })
      }
      state.totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0)
      state.totalAmount = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    },

    removeItem(state, action) {
      const id = action.payload
      state.items = state.items.filter((item) => item.id !== id)
      state.totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0)
      state.totalAmount = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    },

    updateQuantity(state, action) {
      const { id, quantity } = action.payload
      const item = state.items.find((item) => item.id === id)
      if (item) {
        item.quantity = quantity
      }
      state.totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0)
      state.totalAmount = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    },
  },
})

export const { addItem, removeItem, updateQuantity } = cartSlice.actions
export default cartSlice.reducer
