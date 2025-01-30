import { createSlice } from '@reduxjs/toolkit';

const getInitialDarkMode = () => {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme === 'true';
};

const initialState = {
  darkMode: getInitialDarkMode(),
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeSetting: state => {
      state.darkMode = !state.darkMode;
      localStorage.setItem('theme', String(state.darkMode));
    },
  },
});

export const { setThemeSetting } = themeSlice.actions;
export default themeSlice.reducer;
