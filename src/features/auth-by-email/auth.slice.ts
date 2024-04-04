import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ILoginDto, authorizationApi } from 'src/shared/api';
import { IRegistrationDto, registrationApi } from 'src/shared/api';
import { UserStatus } from 'src/shared/api/user';

export interface IAuthState {
  isAuthenticated: boolean;
  userStatus: UserStatus
  isEmailVerified: boolean;
  loading: boolean;
  error?: string;  
}

export const authInitialState: IAuthState = {
  isAuthenticated: false,
  userStatus: UserStatus.Pending,
  isEmailVerified: false,
  loading: false,
};

export const userLogin = createAsyncThunk('web-api/login', async (params: ILoginDto) => {
  return await authorizationApi.login(params);
});

export const userRegistration = createAsyncThunk('web-api/registration', async (params: IRegistrationDto) => {
  return await registrationApi.registration(params);
});

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    setIsAuthenticated: (state) => {
      state.isAuthenticated = !state.isAuthenticated;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending || userRegistration.pending, (state) => {
        state.loading = true;
        
        delete state.error;
      })

      .addCase(userLogin.fulfilled || userRegistration.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.isEmailVerified = action.payload.isEmailVerified;
        state.userStatus = action.payload.status;
      })

      .addCase(userLogin.rejected || userRegistration.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setIsAuthenticated } = authSlice.actions;

export const authReducer = authSlice.reducer;
