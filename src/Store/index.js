// логика по работе с данными (инициализация стора)
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cashreducer } from "./cashReducer";
import { customerreducer } from "./customerReducer";


// соединяем редюсеры
const roorReducer = combineReducers({
  cash: cashreducer, // через ключ даем название редюсерам 
  customers: customerreducer,
})

// store - объект, который содержит методы:
// getState - получить состояние
// dispatch изменить состояние
export const store = createStore(roorReducer, composeWithDevTools(applyMiddleware(thunk))); // передаем middleware вторым параметром (нужен npm i redux-devtools-extension)









