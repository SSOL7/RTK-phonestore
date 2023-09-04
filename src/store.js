import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartslice';
import modalReducer from './features/modal/Modalslice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});
