import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { apiSlice } from "./api/apiSlice";
import authSlice from "./slices/AuthSlice";
import sidebarSlice from "./slices/SidebarSlice";

const persistConfig = {
  key: "root",
  storage,
};

const authReducer = persistReducer(persistConfig, authSlice);

const rootReducer = combineReducers({
  auth: authReducer,
  sidebar: sidebarSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
  devTools: import.meta.env.VITE_NODE_ENV !== "production",
});

export const persistor = persistStore(store);
