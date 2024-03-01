import { AppDispatch } from '@/lib/store';
import { Word } from '@prisma/client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LessonSlice {
  words: { [key: string]: Word };
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
      console.log('initializing words');
      state.words = action.payload;
    },
    saveWord: (state, action: PayloadAction<Word>) => {
      console.log(
        'saving word',
        action.payload.phrase,
        action.payload.translation,
      );
      state.words[action.payload.phrase] = action.payload;
    },
    deleteWord: (state, action: PayloadAction<Word>) => {
      delete state.words[action.payload.phrase];
    },
  },
});

export const { initializeWords, saveWord, deleteWord } = lessonSlice.actions;

export default lessonSlice.reducer;
