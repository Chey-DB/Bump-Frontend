import { configureStore } from '@reduxjs/toolkit'
import newEntryReducer from './Features/newEntrySlice'

export const store = configureStore({
  reducer: {
    newEntry: newEntryReducer,
  },
})