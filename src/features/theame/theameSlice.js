import { createSlice } from '@reduxjs/toolkit'


const initialStateColor = {
    color: " ",
}

export const colorSlice = createSlice({
  name: 'color',
  initialState :initialStateColor,
  reducers: {
   
    changeTextColor: (state, action) => {
      state.color = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeTextColor } = colorSlice.actions

export default colorSlice.reducer