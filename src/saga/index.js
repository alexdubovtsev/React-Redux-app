import { all } from "redux-saga/effects"; // функция - глобальный watcher, следит за другими вочерами
import {cashWatcher} from './cashSaga';
import {customerWatcher} from './customerSaga';

export function* rootWatcher() {
  yield all([cashWatcher(), customerWatcher()])
}