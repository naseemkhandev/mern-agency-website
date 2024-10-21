import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isToggle: false,
  },
  reducers: {
    openMenu: (state) => {
      state.isToggle = true;
    },
    closeMenu: (state) => {
      state.isToggle = false;
    },
  },
});

export const { openMenu, closeMenu } = sidebarSlice.actions;
export default sidebarSlice.reducer;
