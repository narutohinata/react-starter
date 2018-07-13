import { delay } from "redux-saga";
import {
  put,
  takeEvery,
} from 'redux-saga/effects';

function* watcher() {
  yield delay(1000);
}

export default function* demoSaga() {
  yield watcher()
}

