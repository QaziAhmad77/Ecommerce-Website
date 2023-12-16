import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productData: [],
  userInfo: null,
};

export const bazarSlice = createSlice({
  name: 'bazar',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(state.productData, 'product data');
      const item = state.productData.find(
        (item) => item._id === action.payload._id
      );
      console.log(item, 'item');
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    deleteItem: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload
      );
    },
    resetCart: (state) => {
      state.productData = [];
    },
    incrementQuantity: (state, action) => {
      const item = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity--;
      }
    },
    adddUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
  },
});

export const {
  adddUser,
  removeUser,
  addToCart,
  deleteItem,
  resetCart,
  incrementQuantity,
  decrementQuantity,
} = bazarSlice.actions;
export default bazarSlice.reducer;
