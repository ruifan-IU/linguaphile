import { createSlice } from '@reduxjs/toolkit';
import { Lesson } from '@prisma/client';

interface LessonListState {
  publicLessons: Lesson[];
  bookmarked: Lesson[];
}

const initialState: LessonListState = {
  publicLessons: [],
  bookmarked: [],
};

export const lessonListSlice = createSlice({
  name: 'lessonList',
  initialState,
  reducers: {
    initializePublicLessons: (state, action) => {
      state.publicLessons = action.payload;
    },
    addPublicLesson: (state, action) => {
      state.publicLessons.unshift(action.payload);
    },
    initializeBookmarked: (state, action) => {
      state.bookmarked = action.payload;
    },
    addBookmarked: (state, action) => {
      state.bookmarked.unshift(action.payload);
    },
  },
});

export const {
  initializePublicLessons,
  addPublicLesson,
  initializeBookmarked,
  addBookmarked,
} = lessonListSlice.actions;

export default lessonListSlice.reducer;
