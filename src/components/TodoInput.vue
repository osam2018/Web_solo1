<template>
  <el-row>
    <el-col :span="20">
      <el-input v-model="text" @keydown.enter.native="addTodo(text)"/>
    </el-col>
    <el-col center :span="4">
      <el-button @click="addTodo(text)">추가하기</el-button>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

import {Todo as TodoInterface} from '@/interfaces/todo.interface';

@Component
export default class TodoInput extends Vue {
  private text!: string = '';
  private done!: boolean = false;

  private issueId(): number {
    let id: number = 0;
    const todosLength: number = this.$store.state.todos.length;

    if (todosLength !== 0) {
      id = this.$store.state.todos[todosLength  - 1].id + 1;
    }

    return id;
  }

  private addTodo(text: string, done: boolean = false, starred: boolean = false): void {
    const id = this.issueId();

    const todo: TodoInterface = {
      id, text, done, starred,
    };

    this.$store.commit('addTodo', todo);

    this.text = '';
  }
}
</script>
