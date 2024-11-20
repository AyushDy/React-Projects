import { createSlice } from "@reduxjs/toolkit";

const localCart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const updateCart = (state) => {
  state.cartSize = state.cart.reduce(
    (size, item) => size + parseInt(item.quantity),
    0
  );

  state.cartSubtotal = state.cart.reduce(
    (total, curr) =>
      total +
      (curr.selected
        ? (curr.discounted_price
            ? parseFloat(curr.discounted_price.substring(1).replaceAll(",", ""))
            : parseFloat(curr.actual_price)) * curr.quantity
        : 0),
    0
  );

  console.log("cartsubtotal", state.cartSubtotal);

  state.cartTotal = state.cart.reduce(
    (total, curr) =>
      total +
      (curr.discounted_price
        ? parseFloat(curr.discounted_price.substring(1).replaceAll(",", ""))
        : parseFloat(curr.actual_price)) *
        curr.quantity,
    0
  );

  localStorage.setItem("cart", JSON.stringify(state.cart));
};

const initialState = {
  cart: [],
  cartTotal: 0,
  cartSubtotal: 0,
  cartSize: 0,
};

initialState.cart = localCart;

updateCart(initialState);

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const existingProduct = state.cart.find(
        (item) => item.product_id === payload.product_id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...payload, quantity: 1, selected: true });
      }
      updateCart(state);
    },
    removeFromCart: (state, { payload: { product, quantity = null } }) => {
      const existingProduct = state.cart.find(
        (item) => item.product_id === product.product_id
      );
      if (existingProduct) {
        if (quantity === null || existingProduct.quantity <= 1) {
          state.cart = state.cart.filter(
            (item) => item.product_id !== product.product_id
          );
        } else {
          existingProduct.quantity -= 1;
        }
      }

      updateCart(state);
    },
    toggleSelection: (state, { payload: product }) => {
      const existingProduct = state.cart.find(
        (item) => item.product_id === product.product_id
      );

      if (existingProduct) {
        existingProduct.selected = !existingProduct.selected;
      }
      updateCart(state);
    },
    resetCart: (state) => {
      state.cart = [];
      updateCart(state);
    },
    selectAllItems: (state) => {
      state.cart = state.cart.map((item) => ({ ...item, selected: true }));
      updateCart(state);
    },
    deselectAllItems: (state) => {
      state.cart = state.cart.map((item) => ({ ...item, selected: false }));
      updateCart(state);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  toggleSelection,
  resetCart,
  selectAllItems,
  deselectAllItems,
} = cartSlice.actions;
export default cartSlice.reducer;
