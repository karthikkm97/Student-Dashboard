// src/store/studentsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const studentsSlice = createSlice({
  name: 'students',
  initialState: [],
  reducers: {
    addStudent: (state, action) => {
      state.push(action.payload);
    },
    setStudents: (state, action) => {
      return action.payload;
    },
  },
});

export const { addStudent, setStudents } = studentsSlice.actions;
export default studentsSlice.reducer;
