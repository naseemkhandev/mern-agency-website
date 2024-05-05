import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";
import DarkModeReducer from "./slices/DarkModeSlice.js";
import SidebarReducer from "./slices/SidebarSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: DarkModeReducer,
    sidebar: SidebarReducer,
  },
});

export default store;
