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
    starredTodos: state => {
      return state.todos.filter(todo => todo.starred);
    },
    notDoneTodos: state => {
      console.log(state.todos.filter(todo => todo.done != true));
      return state.todos.filter(todo => todo.done != true);
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
    },
    toggleTodoStarred(state, index: number): void {
      state.todos[index].starred = !state.todos[index].starred;
    },
    changeTodoState(state, todoState: string = 'default'): void {
      state.todoState = todoState;
    },
  },
  actions: {},
});
