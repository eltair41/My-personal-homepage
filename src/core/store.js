import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../common/themeSlice';
import personalHomepageReducer from '../features/personalHomepageSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    personalHomepage: personalHomepageReducer,
  },
});

export default store;