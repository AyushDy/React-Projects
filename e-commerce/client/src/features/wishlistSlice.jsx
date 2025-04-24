import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const localWishlist = localStorage.getItem("wishlist")
  ? JSON.parse(localStorage.getItem("wishlist"))
  : null;

const wishlistAdapter = createEntityAdapter({
  selectId: (item) => item.id,
});

const initialState = wishlistAdapter.getInitialState({
  wishlistSize: 0,
  loading: "idle",
  error: null,
});

if (localWishlist) {
  initialState.entities = localWishlist;
}

const updateWishlist = (state) => {
  const allItems = Object.values(state.entities || {}) || [];

  state.wishlistSize = allItems.length;

  localStorage.setItem("wishlist", JSON.stringify(state.entities));
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      const { product } = action.payload;
      wishlistAdapter.addOne(state, product);
      updateWishlist(state);
      console.log("added to wishlist", product);
    },
    removeItem(state, action) {
      const { productId }  = action.payload;
      wishlistAdapter.removeOne(state, productId);
      updateWishlist(state);
      console.log("removed from wishlist", productId);
    },
  },
});

updateWishlist(initialState);


export const { addItem, removeItem } = wishlistSlice.actions;

export const {
    selectAll: selectAllWishlistItems,
    selectById: selectWishlistItemById,
    selectIds: selectWishlistIds,
    selectEntities: selectWishlistEntities,
} = wishlistAdapter.getSelectors(
  (state) => state.wishlist
);

export default wishlistSlice.reducer;
