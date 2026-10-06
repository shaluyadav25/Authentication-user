import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "../api/userApi";
import authReducer from "../../Features/Auth/authSlice";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    auth: authReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});