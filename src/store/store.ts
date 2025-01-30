import { configureStore } from '@reduxjs/toolkit';
import themeSlice from '../features/themeSlice';

export const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
