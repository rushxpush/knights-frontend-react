import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postData } from "../../services/apiService";

export interface InitialStateI {
  token: string | null,
  status: string,
  error: string | null | undefined,
}

const token = localStorage.getItem('knights-backend-bearer-token')

const initialState: InitialStateI = {
  token: token ? token : null,
  status: 'idle',
  error: null,
}

export const loginUser = createAsyncThunk('auth/login', async (credentials: {username: string, password: string}) => {
  const data = await postData('/auth/login', credentials);
  localStorage.setItem('knights-backend-bearer-token', data.access_token);
  return data;
});

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    logout(state) {
      state.token = null;
      localStorage.removeItem('knights-backend-bearer-token')
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeded';
        state.token = action.payload.access_token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  }
});

export const authReducer = authSlice.reducer;
export const { logout } = authSlice.actions;