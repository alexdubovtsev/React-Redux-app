// reducer - функция, которая примимает состояние и action = {type: '', payload: '?'} - js-объект с обязательным полем type, который определяет, как состояние будет изменяться + данные. Состояние - объект, массив или примитивное значение, которое хранит данные

export const ADD_CASH = "ADD_CASH";
export const ASYNC_ADD_CASH = "ASYNC_ADD_CASH";
export const GET_CASH = "GET_CASH";
export const ASYNC_GET_CASH = "ASYNC_GET_CASH";

// defaultState присваивается, когда пользователь открыл приложение
const defaultState = {
  cash: 5,
};

// Каждый раз, когда экшн будет прокидываться в диспатч, состояние будет изменяться и хранится в store, пока пользователь не обновит страницу или закроет приложение
export const cashreducer = (state = defaultState, action) => {
  // производим логику: какой экш проброшен в функцию
  // отслеживаем тип проброшенного экшна и отрабатываем кейсы
  switch (
    action.type // если прилетел экшн с типом, который не обрататываем ни в каком кейсе, возвратим неизмененное состояние
  ) {
    case ADD_CASH:
      // состояния в редакс неизменяемые, поэтому каждый раз возвращаем новый объект и в него разворачиваем старое состояние с измененным полем
      //return { ...state, cash: state.cash + action.payload };
      return { ...state, cash: state.cash + 1 };

    case GET_CASH:
      //return { ...state, cash: state.cash - action.payload };
      return { ...state, cash: state.cash - 1 };

    default:
      return state;
  }
};

// export const addCashAction = (payload) => ({ type: ADD_CASH, payload });
// export const getCashAction = (payload) => ({ type: GET_CASH, payload });
export const addCashAction = () => ({ type: ADD_CASH });
export const asyncAddCashAction = () => ({ type: ASYNC_ADD_CASH });
export const getCashAction = () => ({ type: GET_CASH });
export const asyncGetCashAction = () => ({ type: ASYNC_GET_CASH });
