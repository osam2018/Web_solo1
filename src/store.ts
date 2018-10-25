import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    todoState:  'default',
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    },
  },
  mutations: {
    addTodo(state, todo): void {
      state.todos.push(todo);
    },
    deleteTodo(state, index): void {
      state.todos.splice(index, 1);
    },
    toggleTodoDone(state, index: number): void {
      state.todos[index].done = !state.todos[index].done;
      console.log(state.todos[index].done);
    },
    changeTodoState(state, todoState: string = 'default'): void {
      state.todoState = todoState;
    },
  },
  actions: {
    selectDoneTodo({commit, getters}) {
      commit('ttt', getters.doneTodos);
    },
  },
});
