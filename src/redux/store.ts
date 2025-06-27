import { configureStore } from "@reduxjs/toolkit";
import modalSice from "./modal-slice";
import cartSlice from "./cartSlice/cartSlice";
import likeSlice from "./likeSlice/likeSlice";

const store = configureStore({
  reducer: {
    modalSice,
    cart: cartSlice,
    like: likeSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
