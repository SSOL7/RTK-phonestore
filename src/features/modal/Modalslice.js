import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open_modal: (state, action) => {
      state.isOpen = true;
    },
    close_modal: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const { open_modal, close_modal } = modalSlice.actions;

export default modalSlice.reducer;
