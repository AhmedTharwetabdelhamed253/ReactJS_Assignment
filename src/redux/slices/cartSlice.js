import { createSlice } from "@reduxjs/toolkit";

// Redux: this slice owns the shopping-cart state. Any component connected to the
// store (via useSelector/useDispatch) can read or update it, no prop drilling needed.
const initialState = {
  items: [], // { id, title, price, finalPrice, quantity }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Redux Toolkit uses Immer under the hood, so it's safe to "mutate" state directly
    addToCart: (state, action) => {
      const book = action.payload;
      const existing = state.items.find((item) => item.id === book.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...book, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

// Selectors: keep the "how do I read this state" logic next to the slice itself
export const selectCartItems = (state) => state.cart.items;

export const selectCartCount = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

export const selectCartTotal = (state) =>
  state.cart.items.reduce((total, item) => total + item.finalPrice * item.quantity, 0);

export default cartSlice.reducer;
