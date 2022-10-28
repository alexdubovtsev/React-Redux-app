// здесь будуь все асинхронные запросы внешнему API

import { addManyCustomersAction } from "../Store/customerReducer";

export const fetchCustomers = () => {
  // чтобы использовать функцию как action (т.е. прокидывать в dispatch), вернем функцию, которая параметром принимает dispatch
  return function (dispatch) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => dispatch(addManyCustomersAction(json))); // json - массив пользователей
  };
};
