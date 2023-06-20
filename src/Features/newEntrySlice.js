import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user_id: '',
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
    resetNewEntry: (state) => {
      return {
        ...state,
        title: '',
        content: '',
        symptoms: [],
        mood: [],
      }
    },
    resetMoodAndSymptoms: (state) => {
      return {
        ...state,
        symptoms: [],
        mood: [],
      };
    },
  },
});

export const { updateNewEntry, resetNewEntry, resetMoodAndSymptoms } = newEntrySlice.actions;
export default newEntrySlice.reducer;
