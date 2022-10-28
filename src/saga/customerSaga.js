// асинхронные action для работы с пользователями

import { put, takeEvery, call } from "redux-saga/effects";
import { addCustomerAction, addManyCustomersAction, FETCH_CUSTOMERS } from "../Store/customerReducer";
// put - dispatch, который предназначен для асинхронных экшнов
// call - вовзращает данные, которые прилетают в promise

const FetchCustomersFromApi = () =>
  fetch("https://jsonplaceholder.typicode.com/users?_limit=10"); // функция должна вовзращать promise - fetch это и делает

function* fetchCustomersWorker() {
  // перед асинхронным действием пишем (работает как async await - кусок кода не выполнится, пока не выполнится данное асинхронное действие)
  const data = yield call(FetchCustomersFromApi);
  // когда работаем с fetch, также необходимо из даных вернуть json. Результат промиса - преобразование исходных данных в json
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(addManyCustomersAction(json));
}

export function* customerWatcher() {
  // следит, чтобы асинхронный action был выполнен. Передаем тип action, за которым нужно следить, и worker, который будет отрабатывать, когда action с данным типом будет задиспатчен
  yield takeEvery(FETCH_CUSTOMERS, fetchCustomersWorker);
}
