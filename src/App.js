import { useDispatch, useSelector } from "react-redux/es/exports";
import { fetchCustomers } from "./asyncAction/customers";
import {
  addCashAction,
  asyncAddCashAction,
  getCashAction,
  asyncGetCashAction,
} from "./Store/cashReducer";
import {
  addCustomerAction,
  removeCustomerAction,
  fetchCustomerAction,
} from "./Store/customerReducer";
import "./Styles/App.css";

// Redux - библиотека для работы с состоянием приложения (некоторое хранилище данных). Бывают ситуации, когда состояния из 1 компонента нужны в другом компоненте (можно вынести в родительскую компоненту и передавать через пропсы, но это затратно и сложно в больших приложениях). Redux же выносит состояния во внешнюю зависимость, и каждый компонент получает данные уже из этого состояния, при этом состояния для 1 компоненты можно использовать в другой + нужно хранить данные и логику для работы с ними отдельно от компонентов.
// Actions определяют то, как мы изменяем данные (добавить, изменить). Dispatch принимает эти Actions и передает в Reducer, в котором находится вся логика по работе с данными (он знает все действия). Далее Reducer напрямую изменяет состояния, которые можно будет использовать в React-компонентах

// react-redux - предназначен для того, чтобы связать состояния redux с компонентами

// npm i redux-thunk - middleware модуль для работы с асинхронным кодом, позволяет внутри сторонних функций использовать dispatch

// npm i redux-saga
// Есть 3 основных понятия. Workers - Функция,  в которой выполняется асинхронная логика ()таймауты, асинхронные запросы на сервер).
// Watchers - функция-генератор, в которой с помощью спец функций указываем тип action и worker, который будет отрабатывать с данным типом.
// Effects - набор встроенных в редакс сага функций, которые помогают делать запросы, делать диспатч, следить за воркерами.

function App() {
  const dispatch = useDispatch(); // изменить состояние
  const cash = useSelector((state) => state.cash.cash); // получить состояние (функция, которая принимает состояние, из которого получаем нужную переменную)
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispatch(addCashAction(cash));
  };

  const asyncAddCash = (cash) => {
    dispatch(asyncAddCashAction(cash));
  };

  const getCash = (cash) => {
    dispatch(getCashAction(cash));
  };

  const asyncGetCash = (cash) => {
    dispatch(asyncGetCashAction(cash));
  };

  
  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 20,
          fontSize: 25,
        }}
      >
        {cash}
      </div>
      <div style={{ display: "flex" }}>
        {/* promp открывает окно с полем ввода в браузере */}
        <button onClick={() => addCash(Number(prompt()))}>Add money</button>
        <button onClick={() => asyncAddCash(Number(prompt()))}>
          Add money (async)
        </button>
        <button onClick={() => getCash(Number(prompt()))}>Get money</button>
        <button onClick={() => asyncGetCash(Number(prompt()))}>
          Get money (async)
        </button>


        <button onClick={() => addCustomer(prompt())}>Add Customer</button>
        <button onClick={() => dispatch(fetchCustomers())}>
          Add Customers from Server
        </button> {/* через thunk */}
        <button onClick={() => dispatch(fetchCustomerAction())}>
          Add Customers from Server (saga)
        </button>

      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 20,
          fontSize: 25,
        }}
      >
        {customers.length > 0 ? (
          <div>
            {customers.map((customer) => (
              <div
                style={{
                  cursor: "pointer",
                  border: "1px solid ",
                  padding: 5,
                }}
                onClick={() => removeCustomer(customer)}
              >
                {customer.name}
              </div>
            ))}
          </div>
        ) : (
          <div>No clients</div>
        )}
      </div>
    </div>
  );
}

export default App;
