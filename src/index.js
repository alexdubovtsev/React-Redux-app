import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./App";

// reducer - функция, которая примимает состояние и action = {type: '', payload: '?'} - js-объект с обязательным полем type, который определяет, как состояние будет изменяться. Состояние - объект, массив или примитивное значение, которое хранит данные

// defaultState присваивается, когда пользователь открыл приложение
const defaultState = {
  cash: 5,
};

// Каждый раз, когда экшн будет прокидываться в диспатч, состояние будет изменяться и хранится в store, пока пользователь не обновит страницу или закроет приложение
const reducer = (state = defaultState, action) => {
  // производим логику: какой экш проброшен в функцию
  // отслеживаем тип проброшенного экшна и отрабатываем кейсы
  switch (
    action.type // если прилетел экшн с типом, который не обрататываем ни в каком кейсе, возвратим неизмененное состояние
  ) {
    case "ADD_CASH":
      // состояния в редакс неизменяемые, поэтому каждый раз возвращаем новый объект и в него разворачиваем старое состояние с измененным полем
      return { ...state, cash: state.cash + action.payload };

    case "GET_CASH":
      return { ...state, cash: state.cash - action.payload };

    default:
      return state;
  }
};

// store - объект, который содержит методы:
// getState - получить состояние
// dispatch изменить состояние
const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
