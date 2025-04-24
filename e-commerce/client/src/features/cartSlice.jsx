import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";


const localCart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart")) : null;


const cartAdapter = createEntityAdapter({
  selectId: (item) => item.id,
})


const initialState = cartAdapter.getInitialState({
  cartSize: 0,
  cartSubtotal: 0,
  cartTotal: 0,
  loading : "idle",
  error : null,
})

if(localCart){
  initialState.entities = localCart
}

const updateCart = (state) => {
  const allItems = Object.values(state.entities || {});

  state.cartSize = allItems.reduce((size, item) => size + item.quantity, 0);
  
  state.cartSubtotal = allItems.reduce(
    (total, item) => (item.selected ? total + item.price * item.quantity : total),
    0
  );

  state.cartTotal = allItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  localStorage.setItem("cart", JSON.stringify(state.entities));
};

const cartSlice = createSlice({
  name: "cart",
  initialState : initialState,
  reducers:{
    addItem(state, action){
      const { id , price } = action.payload;
      const existingProduct = state.entities[id];

      if (existingProduct) {
        existingProduct.quantity += 1;
      }else {
        cartAdapter.addOne(state, { id: id, quantity: 1 ,price: price, selected:true });
      }
      updateCart(state);
    },
    removeItem(state,action){
      const productId = action.payload;
      const existingProduct = state.entities[productId];

      if(existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
        } else {
          cartAdapter.removeOne(state, productId);
        }
      }
      updateCart(state);
    },
    clearCart(state) {
      cartAdapter.removeAll(state);
      updateCart(state);
    },
    clearItem(state, action){
      const productId = action.payload;
      const existingProduct = state.entities[productId];
      if(existingProduct) {
        cartAdapter.removeOne(state, productId);
      }
      updateCart(state);
    },
    toggleSelection(state, action){
      const productId = action.payload;
      const existingProduct = state.entities[productId];
      if(existingProduct){
        existingProduct.selected = !existingProduct.selected;
      }
      updateCart(state);
    },
    addMany : {
      reducer(state, action){
        const products = action.payload;
        const newProducts = products.filter(item=>{
          return state.entities[item.id] === undefined;
        })
        cartAdapter.addMany( state, newProducts);
        updateCart(state);
      },
      prepare(products) {
        return {
          payload: products.map((product) => ({
            id: product.id,
            quantity: 1,
            price: product.price,
            selected: true,
          })),
        };
      }
    }
  },
});

updateCart(initialState);

export const { addItem , removeItem, clearCart , clearItem , toggleSelection, addMany } = cartSlice.actions

export const {
  selectAll: selectAllCartItems,
  selectById: selectCartItemById,
  selectEntities: selectCartEntities,
  selectIds: selectCartIds,
  selectTotal: selectCartTotal,
} = cartAdapter.getSelectors((state) => state.cart);

export default cartSlice.reducer