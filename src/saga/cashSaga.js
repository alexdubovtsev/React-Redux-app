// асинхронные action для работы со счетчиком

import { put, takeEvery } from "redux-saga/effects";
import { addCashAction, ASYNC_ADD_CASH, getCashAction, ASYNC_GET_CASH } from "../Store/cashReducer";
// put - dispatch, который предназначен для асинхронных экшнов

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* addCashWorker() {
  // перед асинхронным действием пишем (работает как async await - кусок кода не выполнится, пока не выполнится данное асинхронное действие)
  yield delay(1000);
  yield put(addCashAction()); // не отработает, пока не выполнится delay
}

function* getCashWorker() {
  yield delay(1000);
  yield put(getCashAction());
}

// для всех action, связанных с cash, создаем watcher
export function* cashWatcher() {
  // следит, чтобы асинхронный action был выполнен. Передаем тип action, за которым нужно следить, и worker, который будет отрабатывать, когда action с данным типом будет задиспатчен
  yield takeEvery(ASYNC_ADD_CASH, addCashWorker);
  yield takeEvery(ASYNC_GET_CASH, getCashWorker);
}
