import Vue from 'vue';
import Vuex from 'vuex';

import { Todo as TodoInterface } from '@/interfaces/todo.interface';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [] as TodoInterface[],
    todoState: 'default' as string,
  },
  getters: {
    doneTodos: (state): TodoInterface[] => {
      return state.todos.filter((todo) => todo.done);
    },
    starredTodos: (state): TodoInterface[] => {
      return state.todos.filter((todo) => todo.starred);
    },
    notDoneTodos: (state): TodoInterface[] => {
      return state.todos.filter((todo) => todo.done !== true);
    },
  },
  mutations: {
    addTodo(state, todo: TodoInterface): void {
      state.todos.push(todo);
    },
    deleteTodo(state, index: number): void {
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
