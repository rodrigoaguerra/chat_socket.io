import { createStore } from "redux";

// Define o estado inicial da aplicação
const initialState = {
  users_count: 0,
  users: {}
};

// Define as ações que podem ser executadas
export const actions = {
    users: (users) => ({ type: "USERS", payload: users }),
    incrementar: (count) => ({ type: "INCREMENTAR", payload: count }),
    decrementar: () => ({ type: "DECREMENTAR", })
};

// Define o reducer que atualiza o estado da aplicação
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "USERS": 
        return {...state, users: action.payload}
    case "INCREMENTAR":
        return { ...state, users_count: action.payload };
    case "DECREMENTAR":
      return { ...state, users_count: state.contador - 1 };
    default:
      return state;
  }
};

// Cria o store do Redux
const store = createStore(reducer);

export default store;