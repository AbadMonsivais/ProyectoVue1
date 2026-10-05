import { createStore } from 'vuex';

export default createStore({
  state: {
    message: 'Hola mundo con Vuex!!!'
  },
  mutations: {
    setMessage(state, newMessage) {
      state.message = newMessage;
    }
  }
});