import { useDispatch, useSelector } from "react-redux/es/exports";
import { fetchCustomers } from "./asyncAction/customers";
import { addCustomerAction, removeCustomerAction } from "./Store/customerReducer";
import "./Styles/App.css";

// Redux - библиотека для работы с состоянием приложения (некоторое хранилище данных). Бывают ситуации, когда состояния из 1 компонента нужны в другом компоненте (можно вынести в родительскую компоненту и передавать через пропсы, но это затратно и сложно в больших приложениях). Redux же выносит состояния во внешнюю зависимость, и каждый компонент получает данные уже из этого состояния, при этом состояния для 1 компоненты можно использовать в другой + нужно хранить данные и логику для работы с ними отдельно от компонентов.
// Actions определяют то, как мы изменяем данные (добавить, изменить). Dispatch принимает эти Actions и передает в Reducer, в котором находится вся логика по работе с данными (он знает все действия). Далее Reducer напрямую изменяет состояния, которые можно будет использовать в React-компонентах

// react-redux - предназначен для того, чтобы связать состояния redux с компонентами

// npm i redux-thunk - middleware модуль для работы с асинхронным кодом, позволяет внутри сторонних функций использовать dispatch

function App() {
  const dispatch = useDispatch(); // изменить состояние
  const cash = useSelector((state) => state.cash.cash); // получить состояние (функция, которая принимает состояние, из которого получаем нужную переменную)
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
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
        <button onClick={() => getCash(Number(prompt()))}>Get money</button>
        <button onClick={() => addCustomer(prompt())}>Add Customer</button>
        <button onClick={() => dispatch(fetchCustomers())}>Add Customers from Server</button>
        {/* <button onClick={() => getCustomer(Number(prompt()))}>
          Get Customer
        </button> */}
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
                  cursor: 'pointer', 
                  border: '1px solid ',
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
