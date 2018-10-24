import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {
    toggleTodoDone(state, index: number) {
      state.todos[index].done = !state.todos[index].done;
    },
  },
  actions: {},
});
