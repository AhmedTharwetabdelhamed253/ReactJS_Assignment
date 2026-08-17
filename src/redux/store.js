import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

// Redux Store: the single source of truth for global state managed by Redux.
// More slices (e.g. products, user) can be added to the "reducer" object below.
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
