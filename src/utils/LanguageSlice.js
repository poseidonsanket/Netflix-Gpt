import { createSlice } from "@reduxjs/toolkit";

const LanguageSlice = createSlice({
  name: "lang",
  initialState: {
    lang: "en_US",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export default LanguageSlice.reducer;
export const { changeLanguage } = LanguageSlice.actions;
