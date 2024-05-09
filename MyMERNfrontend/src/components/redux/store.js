import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  // Add other reducers here if you have more slices
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;