import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { ProductsType } from "../../@types"

interface LikeState {
  likes: ProductsType[]
}

const initialState: LikeState = {
  likes: JSON.parse(localStorage.getItem("likes") || "[]"),
}

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<ProductsType>) => {
      const index = state.likes.findIndex(p => p._id === action.payload._id)
      if (index >= 0) {
        state.likes.splice(index, 1) 
      } else {
        state.likes.push(action.payload) 
      }

      localStorage.setItem("likes", JSON.stringify(state.likes))
    },
  },
})

export const { toggleLike } = likeSlice.actions
export default likeSlice.reducer
