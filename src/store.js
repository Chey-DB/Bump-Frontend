import { configureStore } from '@reduxjs/toolkit'
import newEntryReducer from './Features/entry/newEntrySlice'

export const store = configureStore({
  reducer: {
    newEntry: newEntryReducer,
  },
})