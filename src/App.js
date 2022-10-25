import { useDispatch, useSelector } from "react-redux/es/exports";
import './Styles/App.css'


// Redux - библиотека для работы с состоянием приложения (некоторое хранилище данных). Бывают ситуации, когда состояния из 1 компонента нужны в другом компоненте (можно вынести в родительскую компоненту и передавать через пропсы, но это затратно и сложно в больших приложениях). Redux же выносит состояния во внешнюю зависимость, и каждый компонент получает данные уже из этого состояния, при этом состояния для 1 компоненты можно использовать в другой + нужно хранить данные и логику для работы с ними отдельно от компонентов.
// Actions определяют то, как мы изменяем данные (добавить, изменить). Dispatch принимает эти Actions и передает в Reducer, в котором находится вся логика по работе с данными (он знает все действия). Далее Reducer напрямую изменяет состояния, которые можно будет использовать в React-компонентах

// react-redux - предназначен для того, чтобы связать состояния redux с компонентами

function App() {

  const dispatch = useDispatch(); // изменить состояние
  const cash = useSelector(state => state.cash); // получить состояние (функция, которая принимает состояние, из которого получаем нужную переменную)
  console.log(cash);

  const addCash = (cash) => {
    dispatch({type:'ADD_CASH', payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type:'GET_CASH', payload: cash})
  }

  return (
    <div className="App">
      <div style={{display: "flex", justifyContent: "center", marginBottom: 20, fontSize: 25}}>{cash}</div>
      <div style={{display: "flex"}}>
        {/* promp открывает окно с полем ввода в браузере */}
        <button onClick={() => addCash(Number(prompt()))}>Add money</button>
        <button onClick={() => getCash(Number(prompt()))}>Get money</button>
      </div>
    </div>
  );
}

export default App;
