import { AppDispatch } from '@/lib/store';
import { Word } from '@prisma/client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LessonSlice {
  words: { [key: string]: Word };
}

interface LessonListSlice {
  bookmarked: string[];
}

const initialState: LessonSlice = {
  words: {},
};

export const lessonSlice = createSlice({
  name: 'lesson',
  initialState,
  reducers: {
    initializeWords: (
      state,
      action: PayloadAction<{ [key: string]: Word }>,
    ) => {
      state.words = action.payload;
    },
    saveWord: (state, action: PayloadAction<Word>) => {
      state.words[action.payload.phrase] = action.payload;
    },
    deleteWord: (state, action: PayloadAction<Word>) => {
      delete state.words[action.payload.phrase];
    },
  },
});

export const { initializeWords, saveWord, deleteWord } = lessonSlice.actions;

export default lessonSlice.reducer;
