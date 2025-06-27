import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { ProductsType } from '../../@types'

interface CartState {
  cart: ProductsType[]
  liked: ProductsType[]
}

const initialState: CartState = {
  cart: [],
  liked: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductsType>) => {
      const exists = state.cart.some(item => item._id === action.payload._id)
      if (!exists) state.cart.push(action.payload)
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter(item => item._id !== action.payload)
    },
    addToLike: (state, action: PayloadAction<ProductsType>) => {
      const exists = state.liked.some(item => item._id === action.payload._id)
      if (!exists) state.liked.push(action.payload)
    },
    removeFromLike: (state, action: PayloadAction<string>) => {
      state.liked = state.liked.filter(item => item._id !== action.payload)
    }
  }
})

export const { addToCart, removeFromCart, addToLike, removeFromLike } = cartSlice.actions
export default cartSlice.reducer
