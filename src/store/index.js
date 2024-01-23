import { configureStore, createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "course",
  initialState: { courses: [], userCourses: [], selectedCourse: {} },
  reducers: {
    setCourses(state, action) {
      state.courses = action.payload;
    },
    enrollCourse(state, action) {
      if (!state.userCourses.some((item) => item.id === action.payload.id)) {
        state.userCourses.push(action.payload);
      }
    },
    showCourse(state, action) {
      state.selectedCourse = action.payload;
    },
  },
});

export const actions = courseSlice.actions;

const store = configureStore({
  reducer: courseSlice.reducer,
});

export default store;
