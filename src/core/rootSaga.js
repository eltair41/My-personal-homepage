import { all } from "redux-saga/effects";
import { personalHomepageSaga } from "../features/personalHomepageSaga";

export default function* rootSaga() {
  yield all([
    personalHomepageSaga(),
  ])
};