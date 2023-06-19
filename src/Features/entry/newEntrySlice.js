import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user_id: '6488473bfa7d92ab51dfef3f',
  title: '',
  content: '',
  symptoms: [],
  mood: [],
};

const newEntrySlice = createSlice({
  name: 'newEntry',
  initialState,
  reducers: {
    updateNewEntry: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    resetNewEntry: () => initialState,
  },
});

export const { updateNewEntry, resetNewEntry } = newEntrySlice.actions;
export default newEntrySlice.reducer;
