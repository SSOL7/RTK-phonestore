import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://course-api.com/react-useReducer-cart-project';

export const get_cart_items = createAsyncThunk(
  'cart/get_cart_items',
  async () => {
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

console.log(initialState);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clear_cart: (state) => {
      state.cartItems = [];
    },
    remove_item: (state, action) => {
      const itemid = action.payload;
      console.log(itemid);
      state.cartItems = state.cartItems.filter((item) => item.id !== itemid);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount += 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount -= 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(get_cart_items.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(get_cart_items.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cartItems = action.payload;
    });
    builder.addCase(get_cart_items.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { clear_cart, remove_item, increase, decrease, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
