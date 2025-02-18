import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./features/counter/counterSlice";
import { authReducer } from "./features/auth/authSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();