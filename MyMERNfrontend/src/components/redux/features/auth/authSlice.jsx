import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userLogin, userRegister } from "./authActions";

const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

const initialState = {
  loading: false,
  user: null,
  token,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user = payload.token;
      state.token = payload.token;
    });

    builder.addCase(userLogin.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

// builder.addCase(userRegister.pending, (state) => {
//   state.loading = true;
//   state.error = null;
// });
// builder.addCase(userRegister.fulfilled, (state, { payload }) => {
//   state.loading = false;
//   state.user = payload.user;
// });
// builder.addCase(userRegister.rejected, (state, { payload }) => {
//   state.loading = false;
//   state.error = payload;
// });
// // CURRENT user
// builder.addCase(getCurrentUser.pending, (state) => {
//   state.loading = true;
//   state.error = null;
// });
// builder.addCase(getCurrentUser.fulfilled, (state, { payload }) => {
//   state.loading = false;
//   state.user = payload.user;
// });
// builder.addCase(getCurrentUser.rejected, (state, { payload }) => {
//   state.loading = false;
//   state.error = payload;
// });

export const { reset } = authSlice.actions;
export default authSlice.reducer;
