import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {
    addTodo(state, todo): void {
      state.todos.push(todo);
    },
    toggleTodoDone(state, index: number): void {
      state.todos[index].done = !state.todos[index].done;
    },
  },
  actions: {},
});
