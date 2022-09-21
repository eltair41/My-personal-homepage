import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../common/themeSlice';
import personalHomepageReducer from '../features/personalHomepageSlice';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    theme: themeReducer,
    personalHomepage: personalHomepageReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;