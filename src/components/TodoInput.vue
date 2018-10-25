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
  private text!: string;
  private done!: boolean;

  private addTodo(text: string, done: boolean = false, starred: boolean = false): void {
    const todo: TodoInterface = {
      text, done, starred,
    };

    this.$store.commit('addTodo', todo);
  }
}
</script>
