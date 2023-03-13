import { createStore } from "redux";

// Define o estado inicial da aplicação
const initialState = {
  user: null,
  users: {},
  messages: [],
};

// Define as ações que podem ser executadas
export const actions = {
  user: (user) => ({ type: "SET_USER", payload: user }),
  users: (users) => ({ type: "USERS", payload: users }),
  messages: (message) => ({ type: "MESSAGES", payload: message }),
};

// Define o reducer que atualiza o estado da aplicação
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER": 
        return {...state, user: action.payload};
    case "USERS": 
        return {...state, users: action.payload};
    case "MESSAGES": 
        return {...state, messages: [...state.messages, action.payload]};
    default:
      return state;
  }
};

// Cria o store do Redux
const store = createStore(reducer);

export default store;