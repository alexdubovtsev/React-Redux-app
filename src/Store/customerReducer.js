const defaultState = {
  customers: [],
};

const ADD_CUSTOMER = "ADD_CUSTOMER";
const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS";
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";


export const customerreducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] }; // Присваиваем кастомерам новый массив, в котором будет существующий массив + к нему добавляем объект через action

    case ADD_MANY_CUSTOMERS:
      return { ...state, customers: [...state.customers, ...action.payload] };

    case REMOVE_CUSTOMER:
      return {
        ...state,
        customers: [
          ...state.customers.filter(
            (customer) => customer.id !== action.payload
          ),
        ],
      };

    case "GET_CUSTOMERS":
      return { ...state, cash: state.cash - action.payload };

    default:
      return state;
  }
};

// функция, которая будет возвращать объект (action)
export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload });
export const addManyCustomersAction = (payload) => ({ type: ADD_MANY_CUSTOMERS, payload });
export const removeCustomerAction = (payload) => ({
  type: REMOVE_CUSTOMER,
  payload,
});

