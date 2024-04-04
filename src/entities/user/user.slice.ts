import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userApi, UserStatus } from 'src/shared/api/user';

export interface IUserInitialState {
  id: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  accountId: string | null;
  isOwner: boolean;
  isEmailVerified: boolean;
  status: UserStatus;
  loading: boolean;
  avatarUrl?: string;
  error?: string;
}

export const userInitialState: IUserInitialState = {
  id: null,
  firstName: null,
  lastName: null,
  email: null,
  accountId: null,
  isOwner: false,
  isEmailVerified: false,
  status: UserStatus.Pending,
  loading: false,
};

export const getUser = createAsyncThunk('web-api/users', async () => {
  return await userApi.find();
});

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        
        delete state.error;
      })

      .addCase(getUser.fulfilled, (state, action) => {
        const { data } = action.payload;

        state.id = data.accountId;
        state.firstName = data.firstName;
        state.lastName = data.lastName;
        state.email = data.email;
        state.accountId = data.accountId;
        state.isOwner = data.isOwner;
        state.isEmailVerified = data.isEmailVerified;
        state.status = data.status;
        state.avatarUrl = data?.avatarUrl;
        state.loading = false;
      })

      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const userReducer = userSlice.reducer;
