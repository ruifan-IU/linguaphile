import { configureStore } from '@reduxjs/toolkit';
import lessonReducer from '@/slices/lessonSlice';
import lessonListReducer from '@/slices/lessonListSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      lesson: lessonReducer,
      lessonList: lessonListReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
