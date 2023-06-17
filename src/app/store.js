import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import colorchangeReducer from '../features/theame/theameSlice'

export const store = configureStore({
  reducer: {
    counter:counterReducer,
    colorChange : colorchangeReducer,
  },
})