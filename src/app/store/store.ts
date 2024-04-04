import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from 'src/entities/user';
import { authReducer } from 'src/features/auth-by-email';

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    user: userReducer,
    auth: authReducer,
  },
});

export type StateType = ReturnType<typeof store.getState>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
