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
    getTodoById: (state) => (id: number) => {
      return state.todos.filter((todo) => todo.id === id);
    },
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
    deleteTodo(state, id): void {
      state.todos.forEach((todo, index) => {
        if (todo.id === id) {
          state.todos.splice(index, 1);
        }
      });
    },
    toggleTodoDone(state, id: number): void {
      state.todos.forEach((todo, index) => {
        if (todo.id === id) {
          state.todos[index].done = !state.todos[index].done;
        }
      });
    },
    toggleTodoStarred(state, id: number): void {
      state.todos.forEach((todo, index) => {
        if (todo.id === id) {
          state.todos[index].starred = !state.todos[index].starred;
        }
      });
    },
    changeTodoState(state, todoState: string = 'default'): void {
      state.todoState = todoState;
    },
  },
  actions: {},
});
